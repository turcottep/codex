import React, { useState } from "react";
import { pdfjs, Page, Document } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFReader() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(direction) {
    if (direction < 0 && pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    } else if (direction > 0 && pageNumber < numPages - 1) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <div>
      <Document
        file="/pdf/complex_numbers.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div className="flex">
        <button
          onClick={() => changePage(-1)}
          className="bg-blue-500 text-white h-8 px-1 rounded mx-2"
        >
          Previous
        </button>
        <button
          onClick={() => changePage(1)}
          className="bg-blue-500 text-white h-8 px-1 rounded mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PDFReader;
