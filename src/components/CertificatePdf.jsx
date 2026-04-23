import { Document, Page, Text } from '@react-pdf/renderer'
import React from 'react'

const CertificatePdf = () => {
  return (
    <Document>

        <Page>
            <Text>Hello, World!</Text>
        </Page>

    </Document>
  )
}

export default CertificatePdf
