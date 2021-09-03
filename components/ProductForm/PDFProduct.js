import React, { useEffect } from 'react';
import { Page, Text, View, Document, Image, StyleSheet, Font } from '@react-pdf/renderer';
/*import robotoBold from "./fonts/Roboto/Roboto-Bold.ttf";
import robotoLight from "./fonts/Roboto/Roboto-Light.ttf";
import robotoRegular from "./fonts/Roboto/Roboto-Regular.ttf";
import robotoItalic from "./fonts/Roboto/Roboto-Italic.ttf";
import robotoBoldItalic from "./fonts/Roboto/Roboto-BoldItalic.ttf";*/


const PDFProduct = (props) => {
    const { data } = props;

    Font.register({
        family: 'Roboto',
        fonts: [
          {
            src: `/fonts/Roboto/Roboto-Regular.ttf`
          },
          {
            src: `/fonts/Roboto/Roboto-Bold.ttf`,
            fontWeight: 'bold'
          },
          {
            src: `/fonts/Roboto/Roboto-Italic.ttf`,
            fontWeight: 'normal',
            fontStyle: 'italic'
          },
          {
            src: `/fonts/Roboto/Roboto-BoldItalic.ttf`,
            fontWeight: 'bold',
            fontStyle: 'italic'
          }
        ]
    });

    const styles = StyleSheet.create({
        page: { fontFamily: 'Roboto' },
        bold: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        },
        inline: {
            display: "flex",
            flexDirection: "row"
        },
        boldInline: {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            display: "flex",
            flexDirection: "row"
        },
    });

    return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.inline}>
                <Text style={styles.boldInline}>Nombre: </Text><Text>{data.name}</Text>
            </View>
            <View style={styles.inline}>
                <Text style={styles.boldInline}>Descripcion: </Text><Text>{data.description}</Text>
            </View>
            <View style={styles.inline}>
                <Text style={styles.boldInline}>Precio: </Text><Text>{data.price}</Text>
            </View>
            <View>
                <Text style={styles.bold}>Imagen: </Text>
                <Image src={data.imageLocalUrl} />
            </View>
            <View>
                <Text style={styles.bold}>Firma: </Text>
                <Image src={data.signatureLocalUrl} />
            </View>
        </Page>
    </Document>
    );

    // return (
    // <div className={isActive ? "" : "d-none"}>
    //     <div ref={pdfRef}>
    //         <h3 className="font-weight-bold">Nombre: <span className="font-weight-normal">{data.name}</span></h3>
    //         <h3 className="font-weight-bold">Descripcion: <span className="font-weight-normal">{data.description}</span></h3>
    //         <h3 className="font-weight-bold">Precio: <span className="font-weight-normal">{data.price}</span></h3>
    //         <h3 className="font-weight-bold">Imagen:</h3>
    //         <img ref={productImageRef} className={styles.img}></img>
    //         <h3 className="font-weight-bold">Firma: </h3>
    //         <img src={data.signatureLocalUrl}/>
    //     </div>

    //     {/* <Pdf targetRef={pdfRef} filename="product.pdf" onComplete={onFinishTransformPdf}>
    //         {({ toPdf }) => <>
    //             <SecondaryButton onClick={toggleIsActive}>Anterior</SecondaryButton>
    //             <PrimaryButton className="ml-4" onClick={() => handleOnSubmit(toPdf)}>Finalizar</PrimaryButton>
    //         </>}
    //     </Pdf> */}
    // </div>
    // );
};

export default PDFProduct;