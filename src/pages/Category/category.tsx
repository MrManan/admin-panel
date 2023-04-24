import React, { useState } from "react";
import { CircularProgress, TablePagination } from "@mui/material";

import { Link } from "react-router-dom";

type Props = {};
const Category = (props: Props) => {
  const [addCategory, setAddCategory] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="content">
      <div className="top-bar">
        <div className="intro-x breadcrumb mr-auto hidden sm:flex">
          <i data-feather="chevron-right" className="breadcrumb__icon"></i>
          <a href="" className="breadcrumb--active">
            Category Items
          </a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
          <Link to="/addCategory">
            <button className="btn btn-primary">Add Category</button>
          </Link>
          <div className="hidden md:block mx-auto text-gray-600"></div>
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-gray-700">
              <input
                type="text"
                className="input w-56 box pr-10 placeholder-theme-13"
                placeholder="Search..."
              />
              <i
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
                data-feather="search"
              ></i>
            </div>
          </div>
        </div>

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-no-wrap">Sr</th>
                <th className="whitespace-no-wrap">IMAGES</th>
                <th className="whitespace-no-wrap">CATEGORY TITLE</th>
                <th className="whitespace-no-wrap">CREATED AT</th>
                <th className="text-center whitespace-no-wrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <div className="flex justify-center">
                  <CircularProgress size="1.5rem" color="warning" />
                </div>
              ) : (
                addCategory
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((cate: any, index) => (
                    <tr className="intro-x">
                      <td>
                        <div className="text-xs whitespace-no-wrap font-bold">
                          {index + 1}
                        </div>
                      </td>

                      <td>
                        <div className="text-gray-600 text-theme-7 ">
                          {cate.image}
                        </div>
                      </td>
                      <td className="text-gray-600 text-theme-7 ">
                        {" "}
                        {cate.title}
                      </td>

                      <td className="">
                        <div className="flex items-center  text-theme-7">
                          {cate.createdAt}
                        </div>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={addCategory.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* //Modal */}
    </div>
  );
};

export default Category;
