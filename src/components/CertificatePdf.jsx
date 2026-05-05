import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import FuwLogo from '../assets/fuwlogo2.png'
import Crest from '../assets/crest.png?url'
import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode'

const CertificatePdf = ({ styles, data, cid, txHash }) => {

  const studentName = data?.name || "Student Name";
  const matricNo = data?.matricNo || "MATRIC/NUMBER";
  const programme = data?.programme || "Programme";
  const classification = data?.classification || "First Class";
  const dateIssued = data?.dateIssued || new Date().toLocaleDateString();
  const graduationDate = data?.graduationDate || "";

  const [qrDataUrl, setQrDataUrl] = useState(null);

    useEffect(() => {
    if (txHash) {
      QRCode.toDataURL(txHash, { width: 80, margin: 1 })
        .then(url => setQrDataUrl(url))
        .catch(err => console.error("QR Error:", err));
    }
  }, [txHash]);

  return (
    <Document>
      <Page size={'A4'} style={styles.page}>
        <View style={styles.border}>

          <Image style={styles.logo} src={FuwLogo} />
          <Image style={styles.watermark} src={FuwLogo} />

          <Text style={styles.subtitle}>Federal University Wukari</Text>
          <Text style={styles.title}>Certificate of Achievement</Text>
          <Text style={styles.text}>This Certificate Is Proudly Presented To:</Text>
          <Text style={styles.name}>{studentName}</Text>
          <Text style={styles.text}>{matricNo}</Text>
          <Text style={styles.body}>{programme}</Text>
          <Text style={styles.body}>Your hardwork, intellectual curiosity, and dedication to personal growth have set a high standard of excellence within the school system. This Certificate honors your remarkable academic journey and success.</Text>

          <View style={styles.classificationContainer}>
            <Text style={styles.classdes}>Classification:</Text>
            <Text style={styles.classification}>{classification}</Text>
          </View>

          <View style={styles.footer1}>
            <Text style={styles.officials}>H.O.D Sign</Text>
            <View style={styles.official_and_date}>
              <Text style={styles.officials}>{"Vice Chancellor's Sign"}</Text>
              <Text style={styles.date}>{"Date: " + dateIssued}</Text>
            </View>
          </View>

          <View style={styles.footer2}>
            <View style={styles.qrcrest}>
              {/* QR code — only after blockchain storage */}
              {qrDataUrl && (
                <Image style={styles.qr} src={qrDataUrl} />
              )}
              {/* Crest — always visible */}
              <Image style={styles.crest} src={Crest} />
            </View>

            {/* Hash — only after blockchain storage */}
            {cid && (
              <Text style={styles.hash}>{"Certificate ID: " + ( txHash || cid )}</Text>
            )}
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default CertificatePdf;