import { Document, Page, PDFViewer, Text } from '@react-pdf/renderer'
import React from 'react'

const CertificatePdf = () => {
  return (
    
    <PDFViewer width='100%' height='100%' className='min-h-125'>

        <Document>

            <Page size={'A4'}>
                <Text>Hello, World!</Text>
            </Page>

        </Document>

    </PDFViewer>
  )
}

export default CertificatePdf
