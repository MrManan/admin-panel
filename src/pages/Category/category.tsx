import React from "react";
type Props = {};
const Category = (props: Props) => {
  return (
    <div className="content">
      {" "}
      <h2 className="intro-y text-lg font-medium mt-10">Categories</h2>
      <hr />
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button
            className="
          btn btn-primary shadow-md mr-2"
          >
            Add New Category
          </button>

          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="text"
                className="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <i
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
                data-lucide="search"
              ></i>
            </div>
          </div>
        </div>
        {/* <!-- BEGIN: Data List --> */}
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">IMAGES</th>
                <th className="whitespace-nowrap">CATEGORY NAME</th>
                <th className="whitespace-nowrap">SLUG</th>
                <th className="text-center whitespace-nowrap">STATUS</th>
                <th className="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="intro-x">
                <td className="w-40">
                  <div className="flex">
                    <div className="w-10 h-10 image-fit zoom-in">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="tooltip rounded-full"
                        src="dist/images/preview-4.jpg"
                        title="Uploaded at 27 September 2022"
                      />
                    </div>
                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="tooltip rounded-full"
                        src="dist/images/preview-3.jpg"
                        title="Uploaded at 27 September 2022"
                      />
                    </div>
                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="tooltip rounded-full"
                        src="dist/images/preview-2.jpg"
                        title="Uploaded at 27 September 2022"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="" className="font-medium whitespace-nowrap">
                    Photography
                  </a>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Tags: Canon, Nikon, Sony, Fujifilm, Panasonic
                  </div>
                </td>
                <td>
                  <a
                    className="text-slate-500 flex items-center mr-3"
                    href="javascript:;"
                  >
                    {" "}
                    <i
                      data-lucide="external-link"
                      className="w-4 h-4 mr-2"
                    ></i>{" "}
                    /categories/photography{" "}
                  </a>
                </td>
                <td className="w-40">
                  <div className="flex items-center justify-center text-success">
                    {" "}
                    <i
                      data-lucide="check-square"
                      className="w-4 h-4 mr-2"
                    ></i>{" "}
                    Active{" "}
                  </div>
                </td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <a className="flex items-center mr-3" href="javascript:;">
                      {" "}
                      <i
                        data-lucide="check-square"
                        className="w-4 h-4 mr-1"
                      ></i>{" "}
                      Edit{" "}
                    </a>
                    <a
                      className="flex items-center text-danger"
                      href="javascript:;"
                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      {" "}
                      <i
                        data-lucide="trash-2"
                        className="w-4 h-4 mr-1"
                      ></i>{" "}
                      Delete{" "}
                    </a>
                  </div>
                </td>
              </tr>

              <tr className="intro-x">
                <td className="w-40">
                  <div className="flex">
                    <div className="w-10 h-10 image-fit zoom-in">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="tooltip rounded-full"
                        src="dist/images/preview-1.jpg"
                        title="Uploaded at 8 April 2022"
                      />
                    </div>
                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="tooltip rounded-full"
                        src="dist/images/preview-8.jpg"
                        title="Uploaded at 8 April 2022"
                      />
                    </div>
                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="tooltip rounded-full"
                        src="dist/images/preview-4.jpg"
                        title="Uploaded at 8 April 2022"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="" className="font-medium whitespace-nowrap">
                    Home Appliance
                  </a>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Tags: Whirlpool, Amana, LG, Frigidaire, Samsung
                  </div>
                </td>
                <td>
                  <a
                    className="text-slate-500 flex items-center mr-3"
                    href="javascript:;"
                  >
                    {" "}
                    <i
                      data-lucide="external-link"
                      className="w-4 h-4 mr-2"
                    ></i>{" "}
                    /categories/home-appliance{" "}
                  </a>
                </td>
                <td className="w-40">
                  <div className="flex items-center justify-center text-danger">
                    {" "}
                    <i
                      data-lucide="check-square"
                      className="w-4 h-4 mr-2"
                    ></i>{" "}
                    Inactive{" "}
                  </div>
                </td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <a className="flex items-center mr-3" href="javascript:;">
                      {" "}
                      <i
                        data-lucide="check-square"
                        className="w-4 h-4 mr-1"
                      ></i>{" "}
                      Edit{" "}
                    </a>
                    <a
                      className="flex items-center text-danger"
                      href="javascript:;"
                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      {" "}
                      <i
                        data-lucide="trash-2"
                        className="w-4 h-4 mr-1"
                      ></i>{" "}
                      Delete{" "}
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="intro-x">
                <td className="w-40">
                  <div className="flex">
                    <div className="w-10 h-10 image-fit zoom-in">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="tooltip rounded-full"
                        src="dist/images/preview-3.jpg"
                        title="Uploaded at 30 August 2021"
                      />
                    </div>
                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="tooltip rounded-full"
                        src="dist/images/preview-7.jpg"
                        title="Uploaded at 30 August 2021"
                      />
                    </div>
                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="tooltip rounded-full"
                        src="dist/images/preview-14.jpg"
                        title="Uploaded at 30 August 2021"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="" className="font-medium whitespace-nowrap">
                    Electronic
                  </a>
                  <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    Tags: Sony, LG, Toshiba, Hisense, Vizio
                  </div>
                </td>
                <td>
                  <a
                    className="text-slate-500 flex items-center mr-3"
                    href="javascript:;"
                  >
                    {" "}
                    <i
                      data-lucide="external-link"
                      className="w-4 h-4 mr-2"
                    ></i>{" "}
                    /categories/electronic{" "}
                  </a>
                </td>
                <td className="w-40">
                  <div className="flex items-center justify-center text-success">
                    {" "}
                    <i
                      data-lucide="check-square"
                      className="w-4 h-4 mr-2"
                    ></i>{" "}
                    Active{" "}
                  </div>
                </td>
                <td className="table-report__action w-56">
                  <div className="flex justify-center items-center">
                    <a className="flex items-center mr-3" href="javascript:;">
                      {" "}
                      <i
                        data-lucide="check-square"
                        className="w-4 h-4 mr-1"
                      ></i>{" "}
                      Edit{" "}
                    </a>
                    <a
                      className="flex items-center text-danger"
                      href="javascript:;"
                      data-tw-toggle="modal"
                      data-tw-target="#delete-confirmation-modal"
                    >
                      {" "}
                      <i
                        data-lucide="trash-2"
                        className="w-4 h-4 mr-1"
                      ></i>{" "}
                      Delete{" "}
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
