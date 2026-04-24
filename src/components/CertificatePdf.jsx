import { Document, Page, Text, View } from '@react-pdf/renderer'
import FuwLogo from '../assets/fuwlogo.png'
import React from 'react'

const CertificatePdf = ({styles}) => {
  return (
    
    

        <Document>

            <Page size={'A4'} style={styles.page}>
                <View style={styles.border}>

                    {/* <Image src="../assets/fuwlogo.png" alt='logo'/> */}

                    <Text style={styles.subtitle}>Federal University Wukari</Text>
                    <Text style={styles.title}>Certificate of Achievement</Text>
                    <Text style={styles.text}>This Certificate Is Proudly Presented To:</Text>
                    <Text style={styles.name}>Ezekiel Enoch Methuselah</Text>
                    <Text style={styles.body}>Your hardwork, intellectual curiosity, and dedication to personal growth have set a high standard of excellence within the school system. This Certificate honors your remarkable academic journey and success.</Text>

                    <View style={styles.footer1}>
                        <Text style={styles.officials}>H.O.D Sign</Text>
                        <View>
                            <Text style={styles.officials}>Vice Chancellor's Sign</Text>
                            <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.footer2}>
                        <View style={styles.qrcrest}>
                            <Text>qr code</Text>
                            <Text>graduation crest</Text>
                        </View>
                        <Text style={styles.hash}>/*cert hash*/</Text>
                    </View>

                </View>
            </Page>

        </Document>

    
  )
}

export default CertificatePdf;
