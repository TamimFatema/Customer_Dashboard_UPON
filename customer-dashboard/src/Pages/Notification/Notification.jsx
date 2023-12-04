import React from "react";

const Notification = () => {
  return (
    <div className="flex flex-col mx-auto lg:mx-0 p-3 lg:p-0 bg-white w-full md:w-[750px] rounded-lg gap-2 lg:gap-0">
      <div>
        <h6 className="font-bold py-2 px-5 text-lg mb-2">Notifications</h6>
      </div>
      <div className="flex py-3 px-5 gap-6 items-start">
        <div className="flex flex-col border border-1 rounded-lg w-2/5 h-full relative">
          <div className="flex justify-between p-1 bg-[#F8F5FF] rounded-lg mx-1 my-2">
            <div className="flex flex-col">
            <span className="text-xs text-right">Nov 08</span>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            </div>
          </div>
          <div className="flex justify-between p-1 border border-1 rounded-lg mx-1">
            <div className="flex flex-col">
            <span className="text-xs text-right">Nov 08</span>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            </div>
          </div>
        </div>

        <div className="flex border border-1 rounded-lg w-4/5">
          <p className="p-2">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
