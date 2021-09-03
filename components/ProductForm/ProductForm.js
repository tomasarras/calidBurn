import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import { useForm } from "react-hook-form";
import PrimaryButton from "../Buttons/Primary/PrimaryButton";
import PDFProduct from "./PDFProduct";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { create } from 'ipfs-http-client';

const ProductForm = () => {
  const inputImage = useRef();
  const canvas = useRef();
  const [data, setData] = useState(false);
  const { register, handleSubmit } = useForm();
  const [created, setCreated] = useState(false);
  const ipfs = create("https://ipfs.infura.io:5001/api/v0");
  const [hash, setHash] = useState("");

  const clearCanvas = (e) => {
    e.preventDefault();
    canvas.current.clear();
  }

  const download = (blob) => {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "contrato";
    link.click();
  };
 
  const onTransformPDF = async (pdf) => {
    if (pdf) {
      if (window.first === undefined) {
        window.first = true;
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const file = new File([blob], "product.pdf");
        download(blob);
        
        const responsePDF = await ipfs.add(file);
        const responseIMG = await ipfs.add(data.image);

        const pdfURL = process.env.NEXT_PUBLIC_IPFS_GET_FILE + responsePDF.path;
        const imgURL = process.env.NEXT_PUBLIC_IPFS_GET_FILE + responseIMG.path;
        const metadata = {
          name: data.name,
          description: data.description,
          pdfURL,
          imgURL,
        };
        const responseMetadata = await ipfs.add(JSON.stringify(metadata));
        const tokenURI = process.env.NEXT_PUBLIC_IPFS_GET_FILE + responseMetadata.path;
        setHash(tokenURI);
        setCreated(true);
      }
    }

  };

  const handleOnSubmit = async (data) => {
    const image = inputImage.current.files[0];
    data.image = image;
    data.imageLocalUrl = window.URL.createObjectURL(image);
    const signatureBase64 = canvas.current.canvasContainer.children[1].toDataURL('image/png');
    data.signatureLocalUrl = signatureBase64;
    data.signature = dataURLtoFile(signatureBase64);
    setData(data);
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
    <form onSubmit={handleSubmit(handleOnSubmit)}>

      <div className="form-group">
        <label htmlFor="input-name">Nombre del producto</label>
        <input
          {...register("name")}
          type="text"
          className="form-control"
          id="input-name"
          placeholder="Producto"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input-description">Descripcion del producto</label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="input-description"
          placeholder="Descripcion"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input-price">Precio del producto</label>
        <input
          {...register("price")}
          type="number"
          className="form-control"
          id="input-price"
          min="0"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input-image">Imagen del producto</label>
        <input
          {...register("image")}
          type="file"
          ref={inputImage}
          className="form-control-file"
          id="input-image"
        />
      </div>

      <label>Firma</label>
      <CanvasDraw ref={canvas} brushRadius={3} lazyRadius={3} brushColor={"#000000"} canvasWidth={720} canvasHeight={300}/>

      <span className="d-block">{hash}</span>

      <PrimaryButton className="mt-4 mr-4" onClick={clearCanvas} >Borrar firma</PrimaryButton>
      <PrimaryButton className="mt-4 mr-4" >Crear</PrimaryButton>
    </form>

    {(data && !created) &&
      <PDFDownloadLink document={<PDFProduct data={data}/>} fileName="product.pdf">
        {({ blob, loading }) => {
          if (!loading) {
            onTransformPDF(blob);
          } else {
            return "";
          }
        }}
      </PDFDownloadLink>
    }
  </>);
};

export default ProductForm;
