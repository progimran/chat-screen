import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./style.css";

const Container: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const today = new Date().toLocaleDateString();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qa.corider.in/assignment/chat"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="scroll-container">
        {data ? (
          <div>
            <div className="flex items-center justify-center w-full my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">{today}</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            {data.chats.map((chat: any) => (
              <div
                key={chat.id}
                className="flex items-start flex-row-reverse gap-4"
              >
                <div className="card ">
                  <p className="text-left">{chat.message}</p>
                </div>
                <img
                  src={chat.sender.image}
                  alt="Sender"
                  width="50"
                  height="50"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Container;
