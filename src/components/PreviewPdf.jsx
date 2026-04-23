
import React from 'react'
import CertificatePdf from './CertificatePdf'
import { PDFViewer, Font, StyleSheet } from '@react-pdf/renderer'

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});


  const stylez = StyleSheet.create({
  page: {
    padding: 40
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
