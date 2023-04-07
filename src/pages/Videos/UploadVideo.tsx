import React, { useState } from "react";

const UploadVideo = () => {
  type Video = {
    id: number;
    title: string;
    file: File;
    url?: string;
  };

  const [videos, setVideos] = useState<Video[]>([]);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const videosArray: Video[] = [];
    for (let i = 0; i < files.length && i < 10; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        videosArray.push({
          id: i,
          title: file.name,
          file,
          url: e.target.result as string,
        });
        if (videosArray.length === files.length || videosArray.length === 10) {
          setVideos(videosArray);
        }
      };
    }
  };
  const handleVideoUpload = () => {
    // call API to upload videos
    // reset videos state
    setVideos([]);
  };
  return (
    <div className="content">
      <h1 className="intro-y text-lg font-medium m-5">UploadVideo</h1>
      <hr />
      <div className="intro-y box p-5 mt-10">
        <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
          <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
            {" "}
            <i data-lucide="chevron-down" className="w-4 h-4 mr-2"></i> Upload
            Video{" "}
          </div>
          <div className="mt-5">
            <div className="flex items-center text-slate-500">
              <span>
                <i data-lucide="lightbulb" className="w-5 h-5 text-warning"></i>
              </span>
            </div>
            <div className="form-inline items-start flex-col xl:flex-row mt-10">
              <div className="form-label w-full xl:w-64 xl:!mr-10">
                <div className="text-left">
                  <div className="flex items-center">
                    <div className="font-medium">Video Photos</div>
                    <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                      Required
                    </div>
                  </div>
                  <div className="leading-relaxed text-slate-500 text-xs mt-3">
                    <div className="mt-2">
                      Select Video photos or drag and drop up to 10 videos at
                      once here.
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                  <div className="p-6">
                    <input
                      type="file"
                      multiple
                      accept="video/*"
                      onChange={handleVideoChange}
                    />
                    {videos.length > 0 && (
                      <div className="mt-4">
                        {videos.map((video) => (
                          <div
                            key={video.id}
                            className="flex items-center justify-between"
                          >
                            <div>{video.title}</div>
                            <video
                              src={video.url}
                              controls
                              className="h-32 object-cover"
                            />
                          </div>
                        ))}
                        <button
                          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                          onClick={handleVideoUpload}
                        >
                          Upload Videos
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
