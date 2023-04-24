import React, { useState } from "react";

interface Video {
  file: File | null;
  url: string;
  name: string;
  description: string;
}

const UplaodVideo = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [previewVideoUrl, setPreviewVideoUrl] = useState("");
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files) {
      return;
    }

    const newVideos: Video[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      const name = file.name;
      const description = ""; // Set a default description
      newVideos.push({ file, url, name, description });
    }
    setVideos((prevVideos) => [...prevVideos, ...newVideos]);
  };

  return (
    <div className="p-4 space-y-4 content ">
      <div className="top-bar">
        <div className="intro-x breadcrumb mr-auto hidden sm:flex">
          <i data-feather="chevron-right" className="breadcrumb__icon"></i>
          <a href="" className="breadcrumb--active">
            Upload Video
          </a>
        </div>
      </div>

      <div className="max-w-sm">
        <label className="flex justify-center w-full h-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              Choose up to 10 videos to upload
            </span>
          </span>
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={handleFileInputChange}
            className="hidden"
            id="video-file-input"
          />
        </label>
      </div>
      <div className="grid grid-cols-5 gap-4 break-all overflow-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="block max-w-[22rem]  rounded-lg bg-white shadow dark:bg-neutral-700 mt-10 ml-3"
          >
            <video src={video.url} className="w-full h-auto" controls />
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 break-alls">
                {video.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UplaodVideo;
