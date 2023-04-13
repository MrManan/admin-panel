import React from "react";
import { Button } from "@mui/material";
function PendingVideos() {
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

      <div className="grid grid-cols-5 gap-4 break-all">
        <div className="block max-w-[22rem]  rounded-lg bg-white shadow dark:bg-neutral-700 mt-10 ml-3">
          <video src="" className="w-full  h-auto" />
          <div className="p-6 ">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 break-alls">
              Video Name
            </h5>
          </div>
          <hr />
          <button className="btn btn-success-soft m-2 ms-auto float-right">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}

export default PendingVideos;
