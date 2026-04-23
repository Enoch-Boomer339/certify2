import { Document, Page, Text } from '@react-pdf/renderer'
import React from 'react'

const CertificatePdf = ({styles}) => {
  return (
    
    

        <Document>

            <Page size={'A4'} style={styles.page}>
                <Text>Hello, World!</Text>
            </Page>

        </Document>

    
  )
}

export default CertificatePdf;
