import React, { useState } from "react";
import { TextField } from "@mui/material";

const AddCategory = () => {

  
  const [previewImage, setPreviewImage] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="content">
      {" "}
      <div className="top-bar">
        <div className="intro-x breadcrumb mr-auto hidden sm:flex">
          <i data-feather="chevron-right" className="breadcrumb__icon"></i>
          <a href="" className="breadcrumb--active">
            Add Category
          </a>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="row vh-100">
          <div className="col flex justify-center items-center">
            <div className="bg-white rounded-xl p-5 shadow mt-10">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <TextField
                    id="outlined-basic"
                    label="Enter Category"
                    variant="standard"
                    sx={{ width: 400 }}
                  />
                </div>

                <div className="choose-file mb-3">
                  <TextField
                    onChange={handleImageUpload}
                    type="file"
                    id="outlined-basic"
                    variant="outlined"
                    sx={{ width: 400 }}
                  />
                </div>
                <div className="mt-3 ">
                  {previewImage && (
                    <img src={previewImage} alt="Preview" width={400} />
                  )}
                </div>
                <div className="mt-3 ">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                    Sumbit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
