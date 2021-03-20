import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { pdfjs, Page, Document } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFReader() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState([]);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const loadPages = 10;
  // const userData = { curPage: 0 , maxPage:pageNumber};

  // // Set up user data
  // useEffect(() => {
  //   if (userData) {
  //     // Error check
  //     if (userData.error) {
  //       // Handle error
  //     } else {
  //       setUsers(userData.users);
  //     }
  //   }
  // }, [userData]);

  // Router event handler
  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  // Listen to scroll positions for loading more data on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const getNewPages = (nb_pages) => {
    let newPages = [];
    for (let i = 1; i < pageNumber + loadPages; i++) {
      if (i < nb_pages) newPages.push(i);
    }
    setPages(newPages);
  };

  const handleScroll = () => {
    // To get page offset of last user
    const lastUserLoaded = document.querySelector(
      ".pages-list > .page:last-child"
    ) as HTMLElement;
    if (lastUserLoaded) {
      const lastUserLoadedOffset =
        lastUserLoaded.offsetTop + lastUserLoaded.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastUserLoadedOffset) {
        // Stops loading
        if (pageNumber < numPages && !loading) {
          const nPageNumber = Math.min(numPages, pageNumber + 5);
          setPageNumber(nPageNumber);
          getNewPages(numPages);
          // // Trigger fetch
          // const query = router.query;
          // query.page = parseInt(userData.curPage) + 1;
          // router.push({
          //   pathname: router.pathname,
          //   query: query,
        }
      }
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    getNewPages(numPages);
  }

  function changePage(direction) {
    const pageNumberTemp = pageNumber + direction;
    if (pageNumberTemp > 1 && pageNumberTemp < numPages) {
      setPageNumber(pageNumberTemp);
    }
  }

  return (
    <div>
      <Document file="/pdf/Dorf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <ul className="pages-list">
          {pages.length > 0 &&
            pages.map((page, i) => {
              return (
                <li className="page my-2" key={i}>
                  <Page pageNumber={i + 1} />
                </li>
              );
            })}
        </ul>
        {loading && <h1>Loading ...</h1>}
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

export const getServerSideProps = async ({ query }) => {
  // Fetch the first page as default
  const page = query.page || 1;
  let userData = null;
  // Fetch data from external API
  try {
    const res = await fetch(`/api/pdf?page=${page}`);
    if (res.status !== 200) {
      throw new Error("Failed to fetch pdf pages");
    }
    userData = await res.json();
  } catch (err) {
    userData = { error: { message: err.message } };
  }
  // Pass data to the page via props
  return { props: { userData } };
};

export default PDFReader;
