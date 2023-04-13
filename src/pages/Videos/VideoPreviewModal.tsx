import React from "react";
import { Dialog } from "@headlessui/react";

interface VideoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}
const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

        <div className="bg-white rounded-lg p-4 max-w-md w-full mx-auto">
          <video src={videoUrl} controls className="w-full" />
          <div className="mt-4 flex justify-end">
            <button className="btn btn-outline-danger" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default VideoPreviewModal;
