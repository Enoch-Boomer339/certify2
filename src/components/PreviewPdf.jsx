import { PDFViewer } from '@react-pdf/renderer'
import React from 'react'
import CertificatePdf from './CertificatePdf'

const PreviewPdf = () => {
  return (
    <div>
      <PDFViewer width='100%' height='100%' className='min-h-125'>
        <CertificatePdf />
      </PDFViewer>
    </div>
  )
}

export default PreviewPdf
