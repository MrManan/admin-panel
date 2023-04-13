import React, { useState } from "react";
import VideoPreviewModal from "./VideoPreviewModal";

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

  const handlePreviewClick = (videoUrl: string) => {
    setPreviewVideoUrl(videoUrl);
    setIsPreviewModalOpen(true);
  };

  const handleCloseModal = () => {
    setPreviewVideoUrl("");
    setIsPreviewModalOpen(false);
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
      <input
        type="file"
        accept="video/*"
        multiple
        onChange={handleFileInputChange}
        className="hidden"
        id="video-file-input"
      />
      <label
        htmlFor="video-file-input"
        className="block py-2 px-4 bg-gray-200 rounded cursor-pointer"
      >
        Choose up to 10 videos to upload
      </label>
      <div className="btn btn-primary ms-auto float-right">Submit</div>
      <div className="grid grid-cols-5 gap-4 break-all">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => handlePreviewClick(video.url)}
            className="block max-w-[22rem]  rounded-lg bg-white shadow dark:bg-neutral-700 mt-10 ml-3"
          >
            <video src={video.url} className="w-full h-auto" />
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 break-alls">
                {video.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-5 gap-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded cursor-pointer"
            onClick={() => handlePreviewClick(video.url)}
          >
            <video src={video.url} className="w-full h-auto" />
          </div>
        ))}
      </div> */}
      {isPreviewModalOpen && (
        <VideoPreviewModal
          isOpen={isPreviewModalOpen}
          onClose={handleCloseModal}
          videoUrl={previewVideoUrl}
        />
      )}
    </div>
  );
};

export default UplaodVideo;
