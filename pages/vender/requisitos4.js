import React, { useEffect, useRef, useState } from "react";
import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import ContainerSell from "../../components/Container/Sell";
import HeaderSell from "../../components/Header/SellHeader";
import CanvasDraw from "react-canvas-draw";
import styles from "./index.module.css";
import { useRouter } from 'next/router';
import { getById, editById } from "../../services/ProductService";
import { uploadSignature } from "../../services/ImageService";
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFProduct from "../../components/ProductForm/PDFProduct";
import { create } from 'ipfs-http-client';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';
import NFTAbi from "../../contracts/abis/NFT.json";
import MarketAbi from "../../contracts/abis/CalidBurnMarket.json";

const Vender = () => {
  const canvas = useRef();
  const router = useRouter();
  const { product } = router.query;
  const [price, setPrice] = useState("");
  const [typePrice, setTypePrice] = useState("wei");
  const [productObj, setProductObj] = useState(null);
  const [data, setData] = useState(null);
  const ipfs = create("https://ipfs.infura.io:5001/api/v0");
  const [hash, setHash] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [localUrl, setLocalUrl] = useState("");
  const [parts, setParts] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setProductObj(await getById(product));
    }
    if (product) {
      fetchProduct();
    }
  }, [product]);

  const download = (blob) => {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "contrato";
    link.click();
  };

  useEffect(() => {
    const fetchImg = async () => {
      const req = new Request(productObj.path);
      const response = await fetch(req)
      const blob = await response.blob();
      const localUrl = URL.createObjectURL(blob);
      const file = new File([blob], "img.jpg");
      setImgFile(file);
      setLocalUrl(localUrl);
    }

    if (productObj){
      if (!("image" in productObj)) {
        fetchImg();
      }
    }
  }, [productObj]);

  const onTransformPDF = async (pdf) => {
    if (pdf) {
      if (window.first === undefined) {
        window.first = true;
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const file = new File([blob], "product.pdf");
        download(blob);
        
        const responsePDF = await ipfs.add(file);
        const responseIMG = await ipfs.add(imgFile);

        const pdfURL = process.env.NEXT_PUBLIC_IPFS_GET_FILE + responsePDF.path;
        const imgURL = process.env.NEXT_PUBLIC_IPFS_GET_FILE + responseIMG.path;
        const metadata = {
          name: data.name,
          description: data.description,
          pdfURL,
          image: imgURL,
        };
        const responseMetadata = await ipfs.add(JSON.stringify(metadata));
        const tokenURI = process.env.NEXT_PUBLIC_IPFS_GET_FILE + responseMetadata.path;
        setHash(tokenURI);
      }
    }

  };

  const onConfirm = async () => {
    if (product) {
      productObj.price = parseFloat(price);
      await editById(productObj.id, productObj);
      const signatureBase64 = canvas.current.canvasContainer.children[1].toDataURL('image/png');
      productObj.imageLocalUrl = localUrl;
      productObj.signatureLocalUrl = signatureBase64;
      productObj.signature = dataURLtoFile(signatureBase64);
      setData(productObj);
      await uploadSignature(productObj, productObj.signature);
    } else {
      return "/";
    }
  };

  useEffect(() => {
    if (hash !== "")
      onGetHash(hash);
      //router.push("/vender/venta-terminada?hash=" + hash);
  }, [hash]);

  const onGetHash = async (hash) => {
    const nftAddress = process.env.NEXT_PUBLIC_NFT_ADDRESS_CONTRACT;
    const nftMarketAddress = process.env.NEXT_PUBLIC_NFTMARKET_ADDRESS_CONTRACT;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(nftAddress, NFTAbi, signer);
    let transaction = await contract.createToken(hash);
    const tx = await transaction.wait();
    let priceWei = null;
    if (typePrice === "eth") {
      priceWei = ethers.utils.parseEther(price);
    } else {
      priceWei = price;
    }

    const event = tx.events[0];
    const value = event.args[2];
    const tokenId = value.toNumber();
    contract = new ethers.Contract(nftMarketAddress, MarketAbi, signer);
    transaction = await contract.createMarketItem(nftAddress, tokenId, priceWei, parts);
    await transaction.wait();
  };

  const onBuyNFT = async (nft) => {
    const nftAddress = process.env.NEXT_PUBLIC_NFT_ADDRESS_CONTRACT;
    const nftMarketAddress = process.env.NEXT_PUBLIC_NFTMARKET_ADDRESS_CONTRACT;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftMarketAddress, MarketAbi ,signer);
    let priceWei = null;
    if (typePrice === "eth") {
      priceWei = ethers.utils.parseEther(price);
    } else {
      priceWei = price;
    }

    const transaction = await contract.createMarketSale(nftAddress, nft.tokenId, { value: priceWei });
    await transaction.wait();
  };
  

  const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = window.atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  };
  
  return (<>
    <HeaderSell step="5" amountSteps="5" title="Requisitos Para Tokenizar Escritura"/>
    <ContainerSell onConfirm={onConfirm} redirectTo="/" title="¡Felicitaciónes! Estamos a un paso de completar los pasos" description="Sólo queda definir en cuantos tokens dividir tu propiedad. Cada token va a valer la parte que corresponde de acuerdo a su precio final. Esto te va a permitir poder vender o alquilar el inmueble en diversas partes.">
      <div>
        <h4 className="form-title">Cantidad de tokens: Límite 10.000</h4>
        <Form.Label>Elige la cantidad de tokens de la escritura:</Form.Label>
        <div className={`${styles.inputTokens} d-flex`}>
          <InputGroup onChange={() => {}} className="mb-3">
            <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" />

            <DropdownButton
              variant="outline-secondary"
              title={typePrice === 'wei' ? "Wei" : "Eth"}
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item onClick={() => setTypePrice('wei')}>Wei</Dropdown.Item>
              <Dropdown.Item onClick={() => setTypePrice('eth')}>Eth</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </div>
        <Form.Label>Elige la cantidad de partes en que queres hacer la escritura:</Form.Label>
        <Form.Control className={styles.inputTokens} value={parts} onChange={(e) => setParts(e.target.value)} type="number" />

        {(parts !== "" && parts !== "0" && price !== "" && price !== "0") &&
          <div className="mt-4">El contrato se dividira en {parts} partes de {price / (parts !== 0 ? parts : 1)} {typePrice}</div>
        }
      </div>


      <div>
        <h4 className="form-title">Por favor realiza una firma</h4>
        <CanvasDraw ref={canvas} brushRadius={3} lazyRadius={3} brushColor={"#000000"} className="w-100"/>
      </div>
    </ContainerSell>
    {data !== null && <>
      <PDFDownloadLink document={<PDFProduct data={data}/>} fileName="product.pdf">
        {({ blob, loading }) => {
          if (!loading) {
            onTransformPDF(blob);
          } else {
            return "";
          }
        }}
      </PDFDownloadLink>
    </>}
  </>);
};

export default Vender;
