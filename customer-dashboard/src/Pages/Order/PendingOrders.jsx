import React, { useState } from "react";

const PendingOrders = () => {
  const [data, setData] = useState([
    {
      id: 2,
      sl: 2,
      orderId: "123457",
      productDetails: {
        name: "Matte Lipstick",
        brand: "MAC Cosmetics",
        image:
          "https://sdcdn.io/mac/gb/mac_sku_M2LP05_1x1_0.png?width=1440&height=1440",
      },
      date: "7/12/2023",
      status: ["Pending", "Unpaid"],
      amount: "3000",
    },
    // Add more data as needed
  ]);

  const handleDelete = (id) => {
    // Filter out the row with the specified id
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div className="w-full md:w-[750px] mx-auto lg:mx-0 bg-white h-fit rounded-lg">
      <div className="flex justify-between p-4">
        <h6 className="font-bold text-2xl">My Pending Orders</h6>
        <button className="flex items-center border gap-1 p-2 rounded-lg bg-[#F8F5FF]">
          <span className="material-symbols-outlined">sort</span>
          <span>Sort by: Default</span>
          <span className="material-symbols-outlined font-light">
            keyboard_arrow_down
          </span>
        </button>
      </div>

      <div className="w-full overflow-x-scroll md:overflow-auto">
        <table className="table-fixed md:table-auto w-[200%] md:w-full text-sm">
          <thead className="bg-[#F8F5FF]">
            <tr className="text-left">
              <th className="py-2 pl-4 w-[20%] md:w-fit">SL</th>
              <th className="py-2 pl-4 w-[20%] md:w-fit">Order ID</th>
              <th className="py-2 pl-4 w-[20%] md:w-fit">Product Details</th>
              <th className="py-2 pl-4 w-[20%] md:w-fit">Date</th>
              <th className="py-2 pl-4 w-[20%] md:w-fit">Status</th>
              <th className="py-2 pl-4 w-[20%] md:w-fit">Amount</th>
              <th className="py-2 pl-10 w-[50%] md:w-fit">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-2 pl-4">{item.sl}</td>
                <td className="py-2 pl-4">{item.orderId}</td>
                <td className="py-2 pl-4">
                  <div className="flex gap-2">
                    <img
                      className="w-[50px] p-1 border-2 rounded-lg"
                      src={item.productDetails.image}
                      alt={item.productDetails.name}
                    />
                    <div className="flex flex-col">
                      <p>{item.productDetails.name}</p>
                      <p>{item.productDetails.brand}</p>
                    </div>
                  </div>
                </td>
                <td className="py-2 pl-4">{item.date}</td>
                <td className="py-2 pl-4 font-medium w-fit flex flex-col items-center">
                  {item.status.map((s, index) => (
                    <p
                      key={index}
                      className={`${
                        index === 0
                          ? "bg-green-100 text-green-600"
                          : "text-red-600"
                      } p-1 w-fit rounded-lg`}
                    >
                      {s}
                    </p>
                  ))}
                </td>
                <td className="py-2 pl-4">{`${item.amount}`} &#2547;</td>
                <td className="py-2 pl-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined border rounded-md text-[#134EA3] border-[#134EA3]"
                      onClick={() =>
                        console.log("View clicked for ID:", item.id)
                      }
                    >
                      visibility
                    </span>{" "}
                    <span
                      className="material-symbols-outlined border rounded-md text-green-500 border-green-400"
                      onClick={() =>
                        console.log("Download clicked for ID:", item.id)
                      }
                    >
                      download
                    </span>{" "}
                    <button
                      className="material-symbols-outlined border rounded-md text-red-500 border-red-400"
                      onClick={() => handleDelete(item.id)}
                    >
                      delete
                    </button>
                    <button className="rounded-lg bg-[#5709BB] text-white p-1">
                      Order Again
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex text-sm items-center justify-end space-x-4 my-6 mx-3">
        <button className="material-symbols-outlined border border-[#5709BB] py-2 px-2 rounded">
          chevron_left
        </button>
        <button className="page-btn text-black border border-[#5709BB] py-2 px-4 rounded">
          1
        </button>
        <button className="page-btn text-black border border-[#5709BB] py-2 px-4 rounded">
          2
        </button>
        <button className="page-btn text-black border border-[#5709BB] py-2 px-4 rounded">
          3
        </button>
        <button className="material-symbols-outlined border border-[#5709BB] py-2 px-2 rounded">
          chevron_right
        </button>
      </div>
    </div>
  );
};

export default PendingOrders;
