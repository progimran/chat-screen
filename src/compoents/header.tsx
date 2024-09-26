import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex justify-between mx-2 my-4 items-center">
        <div className="flex items-center">
          <div className="size-6">
            <img src={"assets/arrow-left-solid.svg"} alt="arrow" />
          </div>
          <div>
            <p className="font-bold text-3xl pl-4">Trip 1</p>
          </div>
        </div>
        <div className="size-6">
          <img src={"assets/pen-to-square-regular.svg"} alt="edit" />
        </div>
      </div>

      <div className="flex justify-between mx-2 my-2">
        <div className="flex">
          <div className="size-16">
            <img
              src={
                "https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"
              }
              alt="arrow"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-start items-start pl-4 ">
            <div className="flex">
              <p className="text-xl">From</p>
              <p className="font-bold text-2xl pl-2">IGI, Airport, T3</p>
            </div>
            <div className="flex items-end">
              <p className="text-xl">To</p>
              <p className="font-bold text-2xl pl-2">Sector 23</p>
            </div>
          </div>
        </div>
        <div className="flex items-start pr-2 pt-2">
          <div className="size-2">
            <img src={"assets/ellipsis-vertical-solid.svg"} alt="edit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
