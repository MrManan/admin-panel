import { useEffect, useState } from "react";

import noImage from "@/assets/images/no-image.png";
// import { getAllUsers } from '@/helper/backend_helper';
import { CircularProgress, TablePagination } from "@mui/material";
import { config } from "@/components/config";
type Props = {};

const User = (props: Props) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {

  //   const getUsers = async () => {
  //     setLoading(true);
  //     const response = await getAllUsers();
  //     setUsers(response.data.data)
  //     setLoading(false);
  //   }
  //   getUsers();

  // }, []);

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
            User
          </a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
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
                <th className="whitespace-no-wrap">USER NAME</th>
                <th className="whitespace-no-wrap">USER EMAIL</th>
                <th className="whitespace-no-wrap">ADDRESS</th>
                <th className="whitespace-no-wrap">PHONE</th>
                {/* <th className="text-center whitespace-no-wrap">ACTIONS</th> */}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <div className="flex justify-center">
                  <CircularProgress size="1.5rem" color="warning" />
                </div>
              ) : (
                users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user: any, index) => (
                    <tr className="intro-x">
                      <td>
                        <div className="text-xs whitespace-no-wrap font-bold">
                          {index + 1}
                        </div>
                      </td>
                      <td className="w-40">
                        <div className="flex">
                          <div className="w-10 h-10 image-fit zoom-in">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              className="tooltip rounded-full"
                              src={
                                user.profileImage
                                  ? config.FILe_URL + user.profileImage
                                  : noImage
                              }
                              title="Uploaded at 17 July 2021"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-gray-600 text-theme-7 ">
                          {user.name}
                        </div>
                      </td>
                      <td className="text-gray-600 text-theme-7 ">
                        {" "}
                        {user.email}
                      </td>
                      <td className="">
                        <div className="flex items-center  text-theme-7">
                          Okara, pakistan
                        </div>
                      </td>
                      <td className="">
                        <div className="flex items-center  text-theme-7">
                          {user.phoneNumber}
                        </div>
                      </td>
                      {/* <td className=" w-56">
                        <div className="flex justify-center items-center">
                          <a className="flex items-center mr-3" href="javascript:;">
                            <i
                              data-feather="check-square"
                              className="w-4 h-4 mr-1"
                            ></i>
                            Edit
                          </a>
                          <a
                            className="flex items-center text-theme-6"
                            href="javascript:;"
                            data-toggle="modal"
                            data-target="#delete-confirmation-modal"
                          >
                            <i data-feather="trash-2" className="w-4 h-4 mr-1"></i>
                            Delete
                          </a>
                        </div>
                      </td> */}
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <div className="modal" id="delete-confirmation-modal">
        <div className="modal__content">
          <div className="p-5 text-center">
            <i
              data-feather="x-circle"
              className="w-16 h-16 text-theme-6 mx-auto mt-3"
            ></i>
            <div className="text-3xl mt-5">Are you sure?</div>
            <div className="text-gray-600 mt-2">
              Do you really want to delete these records? This process cannot be
              undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              data-dismiss="modal"
              className="button w-24 border text-gray-700 mr-1"
            >
              Cancel
            </button>
            <button type="button" className="button w-24 bg-theme-6 text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
