import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

// Components
import Pokemones from "../../Views/Pokemones/Pokemones";

// Styles
import "./Pagination.styles.css";

// Utils
import Loader from "../Loader/Loader";

const Pagination = ({ itemsPerPage, pokemones, isFilter, isLoading }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(pokemones.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pokemones.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, pokemones]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % pokemones.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {isFilter === false ? (
        isLoading ? (
          <Loader />
        ) : (
          <div className="home-container">
            {currentItems?.map((pokemon, i) => (
              <Pokemones pokemon={pokemon} key={i} />
            ))}
          </div>
        )
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="home-container">
          {currentItems?.map((pokemon, i) => (
            <Pokemones pokemon={pokemon?.pokemon} key={i} />
          ))}
        </div>
      )}

      <nav className="pagination">
        <ReactPaginate
          containerClassName="list"
          breakClassName="points"
          pageClassName="other-pages"
          previousLinkClassName="previous-botton"
          nextLinkClassName="next-botton"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </nav>
    </>
  );
};

export default Pagination;
