import React from 'react'
import CertificatePdf from './CertificatePdf'
import { PDFViewer, Font, StyleSheet } from '@react-pdf/renderer'
import { useLocation } from 'react-router-dom' // ✅ add this

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const stylez = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 14,
    backgroundColor: "#FFFDF5",
    height: "100%",
    textAlign: "center"
  },
  watermark: {
    position: "absolute",
    width: "50%",
    height: "50%",
    alignSelf: "center",
    borderRadius: 20,
    opacity: 0.1,
    zIndex: -1
  },
  border: {
    border: "5pt solid #006400",
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
  crest: {
    width: 80,        // ✅ reduced from 120 — was too big and getting clipped
    height: 80,
    borderRadius: 40,
  },

  title: {
    fontSize: 33,
    marginBottom: 20,
    color: "#D4AF37",
    fontFamily: "Oswald"
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "green",
    fontFamily: "Times-Roman"
  },
  classdes: {
    fontSize: 16,
    marginBottom: 20,
    marginRight: 2,
    fontFamily: "Times-Roman",
    color: "#333333"
  },
  classification: {
    fontSize: 26,
    marginLeft: 5,
    color: "#002147",
    fontFamily: "Oswald",
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: 1
  },
  classificationContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "baseline",
    justifyContent: "center",
    marginBottom: 27
  },
  name: {
    fontSize: 34,
    marginVertical: 10,
    color: "#002147",
    fontFamily: "Oswald",
    fontWeight: "black"
  },
  body: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Times-Roman",
    color: "#333333"
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
    color: "grey",
    marginLeft: 6
  },
  official_and_date: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  footer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  footer2: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  qrcrest: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  hash: {
    fontSize: 12,     // ✅ smaller so it fits
    marginTop: 8,
    fontFamily: "Times-Roman",
    textAlign: "center",
    color: "#555555"
  }
})

const PreviewPdf = () => {
  const { state } = useLocation(); // ✅ receives data from AdminState2

  // ✅ Guard: if no data, show error instead of crashing
  if (!state) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">No certificate data found. Please fill the form first.</p>
      </div>
    );
  }

  return (
    <div style={{width:'100%', height: '100vh'}}>
      <PDFViewer width='100%' height='100%'>
        <CertificatePdf styles={stylez} data={state} />
      </PDFViewer>
    </div>
  )
}

export default PreviewPdf;