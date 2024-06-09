import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { getSeriesMovie } from "../../Apiserver/Apiserver";
import { FaPlay } from "react-icons/fa";
const SeriesMovie = (props) => {
  const [data, setNewData] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 10;
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    FetchApiUpdate();
  }, [currentPage]);

  const FetchApiUpdate = async () => {
    let res = await getSeriesMovie(currentPage);
    if (res && res.data && res.data.data && res.data.data.items) {
      const endOffset = itemOffset + itemsPerPage;
      setNewData(res.data.data.items.slice(itemOffset, endOffset));
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);

    setCurrentPage(event.selected);
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className="p-2">
              <span
                className="play"
                onClick={() => props.handleCickMovieEven(item)}
              >
                <FaPlay />
              </span>
              <img
                className="fff object-cover"
                src={`https://img.phimapi.com/${item.thumb_url}`}
                alt="loi"
              />
              <span className="block mt-2 main-item__link">{item.name}</span>
            </div>
          ))}
      </div>

      <div className="w-full flex items-center justify-center">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="inline-block mx-1"
          pageLinkClassName="block py-2 px-4 border rounded hover:bg-gray-200"
          previousClassName="inline-block mx-1"
          previousLinkClassName="block py-2 px-4 border rounded hover:bg-gray-200"
          nextClassName="inline-block mx-1"
          nextLinkClassName="block py-2 px-4 border rounded hover:bg-gray-200"
          breakLabel="..."
          breakClassName="inline-block mx-1"
          breakLinkClassName="block py-2 px-4 border rounded hover:bg-gray-200"
          containerClassName="flex justify-center"
          activeClassName="bg-blue-500 text-white"
          renderOnZeroPageCount={null}
          forcePage={currentPage}
        />
      </div>
    </>
  );
};

export default SeriesMovie;
