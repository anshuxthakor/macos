import "./PdfViewer.scss"
import file from './Syllabus.pdf'

const PdfViewer = () => {
  return (
    <div className="pdf-viewer">
        <iframe src={file} title="PDF Viewer" className="pdf-frame" />
    </div>
  )
}

export default PdfViewer
