import { Document, Page, Text, View } from '@react-pdf/renderer'
import React from 'react'

const CertificatePdf = ({styles}) => {
  return (
    
    

        <Document>

            <Page size={'A4'} style={styles.page}>
                <View>

                    <Text>Certificate of Achievement</Text>
                    <Text></Text>

                </View>
            </Page>

        </Document>

    
  )
}

export default CertificatePdf;
