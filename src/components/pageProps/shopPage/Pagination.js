import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
              rating={item.rating}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage, items }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>

      <div className="flex flex-col mdl:flex-row justify-between items-center mt-10">
        <ReactPaginate
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageLinkClassName="w-9 h-9 border border-gray-700 flex justify-center items-center hover:border-yellow-400"
          containerClassName="flex gap-3"
          activeClassName="bg-yellow-400 text-black"
        />

        <p className="text-gray-400 mt-4 mdl:mt-0">
          Showing {itemOffset + 1} - {Math.min(endOffset, items.length)} of{" "}
          {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;