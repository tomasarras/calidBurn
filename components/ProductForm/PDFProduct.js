import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const PDFProduct = (props) => {
  const { data } = props;

  Font.register({
    family: "Roboto",
    fonts: [
      {
        src: `/fonts/Roboto/Roboto-Regular.ttf`,
      },
      {
        src: `/fonts/Roboto/Roboto-Bold.ttf`,
        fontWeight: "bold",
      },
      {
        src: `/fonts/Roboto/Roboto-Italic.ttf`,
        fontWeight: "normal",
        fontStyle: "italic",
      },
      {
        src: `/fonts/Roboto/Roboto-BoldItalic.ttf`,
        fontWeight: "bold",
        fontStyle: "italic",
      },
    ],
  });

  const styles = StyleSheet.create({
    page: { fontFamily: "Roboto" },
    bold: {
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    inline: {
      display: "flex",
      flexDirection: "row",
    },
    boldInline: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      display: "flex",
      flexDirection: "row",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.inline}>
          <Text style={styles.boldInline}>Nombre: </Text>
          <Text>{data.name}</Text>
        </View>
        <View style={styles.inline}>
          <Text style={styles.boldInline}>Descripcion: </Text>
          <Text>{data.description}</Text>
        </View>
        <View style={styles.inline}>
          <Text style={styles.boldInline}>Precio: </Text>
          <Text>{data.price}</Text>
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

};

export default PDFProduct;
