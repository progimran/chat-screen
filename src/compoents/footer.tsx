import React, { useState } from "react";

const Footer: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  return (
    <>
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Reply to Rohit Yadav"
            className="block w-full rounded-md border-0 py-4 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="absolute inset-y-0 right-0 flex items-center w-24 justify-items-center justify-around">
            <button className="p-2 relative" onClick={toggleOptions}>
              <img
                src="assets/paperclip-solid.svg"
                alt="Attach"
                className="w-6 h-6"
              />
            </button>
            {showOptions && (
              <div className="absolute bottom-16 right-0 bg-green-500 rounded-3xl flex space-x-4 px-2">
                <button>
                  <img
                    src="assets/camera-solid.svg"
                    alt="Camera"
                    className="w-32 h-12 apply-color"
                  />
                </button>
                <button>
                  <img
                    src="assets/video-solid.svg"
                    alt="Video"
                    className="w-32 h-12 apply-color"
                  />
                </button>
                <button>
                  <img
                    src="assets/file-arrow-down-solid.svg"
                    alt="Video"
                    className="w-24 h-12 apply-color"
                  />
                </button>
              </div>
            )}

            <div className="size-6">
              <img src={"assets/paper-plane-regular.svg"} alt="edit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
