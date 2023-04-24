import React, { useState } from "react";
import { CircularProgress, TablePagination, TextField } from "@mui/material";

function PendingVideos() {
  const [getVideo, setGetVideo] = useState([]);
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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="p-4 space-y-4 content ">
      <div className="top-bar">
        <div className="intro-x breadcrumb mr-auto hidden sm:flex">
          <i data-feather="chevron-right" className="breadcrumb__icon"></i>
          <a href="" className="breadcrumb--active">
            Pending Video
          </a>
        </div>
      </div>

      <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table className="table table-report -mt-2">
          <thead>
            <tr>
              <th className="whitespace-no-wrap">Sr</th>
              <th className="whitespace-no-wrap">VIDEOS</th>
              <th className="whitespace-no-wrap">USER</th>
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
              getVideo
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((vid: any, index) => (
                  <tr className="intro-x">
                    <td>
                      <div className="text-xs whitespace-no-wrap font-bold">
                        {index + 1}
                      </div>
                    </td>

                    <td>
                      <div className="text-gray-600 text-theme-7 ">
                        <div className="grid grid-cols-5 gap-4 break-all overflow-auto">
                          <div className="block max-w-[22rem]  rounded-lg bg-white shadow dark:bg-neutral-700 mt-10 ml-3">
                            <video
                              src={vid.videos}
                              className="w-full  h-auto"
                            />
                            <div className="p-6 ">
                              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 break-alls">
                                Video Name
                              </h5>
                            </div>
                            <hr />
                            <button className="btn btn-success-soft m-2 ms-auto float-right">
                              Approved
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-gray-600 text-theme-7 "> {vid.user}</td>

                    <td className="">
                      <div className="flex items-center  text-theme-7">
                        {vid.createdAt}
                      </div>
                    </td>
                    <td className="">
                      <div className="flex items-center  text-theme-7">
                        <button className="btn btn-primary-soft">
                          Approved
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={getVideo.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default PendingVideos;
