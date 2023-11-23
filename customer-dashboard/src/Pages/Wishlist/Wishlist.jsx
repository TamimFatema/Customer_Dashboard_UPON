import React, { useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Iphone 14",
      brand: "Apple",
      image:
        "https://static.toiimg.com/thumb/resizemode-4,msid-80635321,imgsize-100,width-100,imgv-2/80635321.jpg",
      amount: 1999000,
    },
    {
      id: 2,
      name: "Matte Lipstick",
      brand: "Mac Cosmetics",
      image:
        "https://sdcdn.io/mac/gb/mac_sku_M2LP05_1x1_0.png?width=1440&height=1440",
      amount: 999.99,
    },
  ]);

  const handleDelete = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  const handleClearAll = () => {
    setWishlist([]);
  };

  return (
    <div className="w-full md:w-[750px] mx-auto lg:mx-0 bg-white h-fit rounded-lg">
      <div className="flex justify-between p-4">
        <h6 className="font-bold text-2xl">Wishlist</h6>
        <p
          className="underline text-red-700 font-bold cursor-pointer"
          onClick={handleClearAll}
        >
          Clear all
        </p>
      </div>
      <div className="w-full overflow-x-scroll md:overflow-auto">
        <table className="table-fixed md:table-auto w-[200%] md:w-full text-sm">
          <thead className="bg-purple-100">
            <tr className="text-left">
              <th className="py-2 pl-4 w-[20%] md:w-fit">SL</th>
              <th className="py-2 pl-4 w-[60%] md:w-fit">Product Details</th>
              <th className="py-2 pl-4 w-[20%] md:w-fit">Brand</th>
              <th className="py-2 pl-4 w-[40%] md:w-fit">Amount</th>
              <th className="py-2 pl-4 w-[60%] md:w-fit">Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No items on your wishlist
                </td>
              </tr>
            ) : (
              wishlist.map((item, index) => (
                <tr key={item.id}>
                  <td className="py-2 pl-4">{index + 1}</td>
                  <td className="py-2 pl-4">
                    <div className="flex gap-2">
                      <img
                        className="w-[50px] p-1 border-2 rounded-lg"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="flex flex-col">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 pl-4">{item.brand}</td>
                  <td className="py-2 pl-4">{`${item.amount} `} &#2547;</td>
                  <td className="py-2 pl-4">
                    <div className="flex items-center gap-1">
                      <button className="material-symbols-outlined border rounded-md text-green-600 border-green-500">
                        shopping_cart
                      </button>
                      <button
                        className="material-symbols-outlined border rounded-md text-red-500 border-red-500"
                        onClick={() => handleDelete(item.id)}
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex text-sm items-center justify-end space-x-4 my-6 mx-3">
        <span className="material-symbols-outlined border py-2 px-2 rounded">
          chevron_left
        </span>
        <button className="page-btn text-black border py-2 px-4 rounded">
          1
        </button>
        <button className="page-btn text-black border py-2 px-4 rounded">
          2
        </button>
        <button className="page-btn text-black border py-2 px-4 rounded">
          3
        </button>
        <span className="material-symbols-outlined border py-2 px-2 rounded">
          chevron_right
        </span>
      </div>
    </div>
  );
};

export default Wishlist;
