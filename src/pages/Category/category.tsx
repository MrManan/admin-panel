import React, { useState } from "react";
import { CircularProgress, TablePagination, TextField } from "@mui/material";

import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CloseButton = styled(Button)({
  position: "absolute",
  top: "220px",
  right: "60px",
});

const ImagePreview = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100px",
  border: "1px dashed grey",
  padding: "16px",
  margin: "16px 0",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 20,
  p: 4,
};

type Props = {};
const Category = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedImage(file || null);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <Button
            variant="contained"
            onClick={handleOpen}
            component="span"
            sx={{ mt: 3 }}
          >
            Add Category
          </Button>
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

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h3">
            Add Category
          </Typography>
          <Divider />
          <div className="form-contorl">
            <form onSubmit={handleSubmit}>
              <TextField
                label="Enter Category"
                className="form-control "
                type="name"
                name="category"
                sx={{ mt: 2 }}
              />
              <Box sx={{ p: 2 }}>
                <ImagePreview>
                  <Button
                    variant="text"
                    component="label"
                    htmlFor="image-input"
                  >
                    Upload Image
                    <input
                      id="image-input"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                  </Button>
                  {selectedImage ? (
                    <>
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"
                        style={{ maxWidth: "50%", maxHeight: "50%" }}
                      />
                      <CloseButton
                        onClick={handleImageRemove}
                        variant="outlined"
                        color="error"
                      >
                        X
                      </CloseButton>
                    </>
                  ) : (
                    <Typography variant="body1" color="error">
                      No image selected
                    </Typography>
                  )}
                </ImagePreview>
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="form-control"
              >
                Submit{" "}
              </Button>
            </form>
          </div>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Button
            onClick={handleClose}
            variant="contained"
            color="warning"
            className="form-control"
          >
            Cancel{" "}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Category;
