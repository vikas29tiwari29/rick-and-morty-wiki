import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
// require("bootstrap/less/bootstrap.less");
const Pagination = ({ setPageNumber, pageNumber, info }) => {
  let [width, setWidth] = useState(window.innerWidth);

  //  console.log(width)

  let updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
    <style jsx>
      {`
      @media (max-width:768px){
        .next , .prev{
          display:none;
        }
        .pagination{
          font-size:14px;
        }
      }
      `}
    </style>
      <ReactPaginate
        pageCount={info?.pages}
        className="pagination justify-content-center gap-4 my-4"
        nextClassName="btn btn-primary next"
        previousClassName="btn btn-primary prev"
        nextLabel=">>"
        previousLabel="<<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width <576 ? 1 : 2}
        pageRangeDisplayed={width <576 ? 1 : 2}
        activeClassName="active"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        // breakLabel=""
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
      />
    </>
  );
};

export default Pagination;
