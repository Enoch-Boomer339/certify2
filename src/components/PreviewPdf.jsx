
import React from 'react'
import CertificatePdf from './CertificatePdf'
import { PDFViewer, Font, StyleSheet } from '@react-pdf/renderer'

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});


  const stylez = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 14,
    backgroundColor: "#fdfdfd",
    height: "100%",
    textAlign: "center"
  },

  border: {
    border: "5pt solid green",
    padding: 25,
    borderRadius: 20,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    alignSelf: "center",
    borderRadius: 60
  },

  title: {
    fontSize: 33,
    marginBottom: 20,
    color: "#444",
    fontFamily: "Oswald"
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 40,
    color: "green",
    fontFamily: "Times-Roman"
  },

  name: {
    fontSize: 26,
    marginVertical: 20,
    color: "#111",
    fontFamily: "Oswald"
  },

  body: {
    fontSize: 16,
    marginBottom: 40,
    fontFamily: "Times-Roman"
  },

  text: {
    fontSize: 18,
    marginBottom: 20,
    color: "green",
    fontFamily: "Times-Roman"
  },

  officials: {
    borderTop: "1pt solid #000",
    width: 150,
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Times-Roman",
    paddingTop: 5
  },

  date: {
    fontSize: 12,
    color: "grey"
  },

  footer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  footer2: {
    display: "flex",
    flexDirection: "coluumn",
    textAlign: "center",
    gap:10
  },

  qrcrest: {
    display: "flex",
    flexDirection: "row",
    gap: 15
  },

  hash: {
    fontSize: 19,
    marginTop: 10,
    fontFamily: "Times-Roman"
  }


})


const PreviewPdf = () => {
 

  return (
    <div style={{width:'100%', height: '100vh'}}>
      <PDFViewer width='100%' height='100%'>
        <CertificatePdf styles={stylez} />
      </PDFViewer>
    </div>
  )
}

export default PreviewPdf;
