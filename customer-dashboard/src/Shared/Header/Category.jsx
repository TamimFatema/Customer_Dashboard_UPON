import { useState } from "react";

const categories = [
  {
    name: "Automotive and Tools",
    subcategories: [
      {
        name: "Oil & Fuel",
        subsubcategories: [
          "Sub-Subcategory 1.1.1",
          "Sub-Subcategory 1.1.2",
          "Sub-Subcategory 1.1.3",
        ],
      },
      {
        name: "Car Interior Accessories",
        subsubcategories: [
          "Sub-Subcategory 1.2.1",
          "Sub-Subcategory 1.2.2",
          "Sub-Subcategory 1.2.4",
        ],
      },
      {
        name: "Car Exterior Accessories",
        subsubcategories: [
          "Sub-Subcategory 1.2.1",
          "Sub-Subcategory 1.2.2",
          "Sub-Subcategory 1.2.3",
          "Sub-Subcategory 1.2.4",
        ],
      },
    ],
  },
  {
    name: "Beauty and Personal Care",
    subcategories: [
      {
        name: "Subcategory 2.1",
        subsubcategories: ["Sub-Subcategory 2.1.1", "Sub-Subcategory 2.1.2", "Sub-Subcategory 3.1.2"],
      },
      {
        name: "Subcategory 2.2",
        subsubcategories: ["Sub-Subcategory 2.2.1", "Sub-Subcategory 2.2.2"],
      },
    ],
  },
  {
    name: "Books and Stationery",
    subcategories: [
      {
        name: "Subcategory 2.1",
        subsubcategories: ["Sub-Subcategory 2.1.1", "Sub-Subcategory 2.1.2", "Sub-Subcategory 3.1.2"],
      },
      {
        name: "Subcategory 2.2",
        subsubcategories: ["Sub-Subcategory 2.2.1", "Sub-Subcategory 2.2.2"],
      },
    ],
  },
  {
    name: "Electronics",
    subcategories: [
      {
        name: "Subcategory 2.1",
        subsubcategories: ["Sub-Subcategory 2.1.1", "Sub-Subcategory 2.1.2", "Sub-Subcategory 3.1.2"],
      },
      {
        name: "Subcategory 2.2",
        subsubcategories: ["Sub-Subcategory 2.2.1", "Sub-Subcategory 2.2.2"],
      },
    ],
  },
  {
    name: "Fashion",
    subcategories: [
      {
        name: "Oil & Fuel",
        subsubcategories: [
          "Sub-Subcategory 1.1.1",
          "Sub-Subcategory 1.1.2",
          "Sub-Subcategory 1.1.3",
        ],
      },
      {
        name: "Car Interior Accessories",
        subsubcategories: [
          "Sub-Subcategory 1.2.1",
          "Sub-Subcategory 1.2.2",
          "Sub-Subcategory 1.2.4",
        ],
      },
      {
        name: "Car Exterior Accessories",
        subsubcategories: [
          "Sub-Subcategory 1.2.1",
          "Sub-Subcategory 1.2.2",
          "Sub-Subcategory 1.2.3",
          "Sub-Subcategory 1.2.4",
        ],
      },
    ],
  },
  {
    name: "Food and Beverages",
    subcategories: [
      {
        name: "Subcategory 2.1",
        subsubcategories: ["Sub-Subcategory 2.1.1", "Sub-Subcategory 2.1.2", "Sub-Subcategory 3.1.2"],
      },
      {
        name: "Subcategory 2.2",
        subsubcategories: ["Sub-Subcategory 2.2.1", "Sub-Subcategory 2.2.2"],
      },
    ],
  },
  {
    name: "Health and Wellness",
    subcategories: [
      {
        name: "Subcategory 2.1",
        subsubcategories: ["Sub-Subcategory 2.1.1", "Sub-Subcategory 2.1.2", "Sub-Subcategory 3.1.2"],
      },
      {
        name: "Subcategory 2.2",
        subsubcategories: ["Sub-Subcategory 2.2.1", "Sub-Subcategory 2.2.2"],
      },
    ],
  },
  {
    name: "Home and Living",
    subcategories: [
      {
        name: "Subcategory 2.1",
        subsubcategories: ["Sub-Subcategory 2.1.1", "Sub-Subcategory 2.1.2", "Sub-Subcategory 3.1.2"],
      },
      {
        name: "Subcategory 2.2",
        subsubcategories: ["Sub-Subcategory 2.2.1", "Sub-Subcategory 2.2.2"],
      },
    ],
  },
  {
    name: "Sports and Outdoors",
    subcategories: [
      {
        name: "Subcategory 2.1",
        subsubcategories: ["Sub-Subcategory 2.1.1", "Sub-Subcategory 2.1.2", "Sub-Subcategory 3.1.2"],
      },
      {
        name: "Subcategory 2.2",
        subsubcategories: ["Sub-Subcategory 2.2.1", "Sub-Subcategory 2.2.2"],
      },
    ],
  },
  {
    name: "Toys and Games",
    subcategories: [
      {
        name: "Subcategory 2.1",
        subsubcategories: ["Sub-Subcategory 2.1.1", "Sub-Subcategory 2.1.2", "Sub-Subcategory 3.1.2"],
      },
      {
        name: "Subcategory 2.2",
        subsubcategories: ["Sub-Subcategory 2.2.1", "Sub-Subcategory 2.2.2"],
      },
    ],
  },
];

const Categories = () => {
  const [showSubcategory, setShowSubcategory] = useState(null);
  const [showSubSubcategory, setShowSubSubcategory] = useState(null);

  const handleCategoryHover = (index) => {
    setShowSubcategory(index);
    setShowSubSubcategory(null);
  };

  const handleSubcategoryHover = (index) => {
    setShowSubSubcategory(index);
  };

  const handleCategoryLeave = () => {
    setShowSubcategory(null);
    setShowSubSubcategory(null);
  };

  return (
    <div className="bg-gray-300">
      <div className="flex w-fit" onMouseLeave={handleCategoryLeave}>
        <div className="bg-white">
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                onMouseEnter={() => handleCategoryHover(index)}
                className="relative text-black hover:bg-slate-200 hover:text-blue-500 hover:font-medium cursor-pointer p-2"
              >
                <a href="#">{category.name}</a>
                <span className="material-symbols-outlined float-right">
                  navigate_next
                </span>
              </li>
            ))}
          </ul>
        </div>
        {showSubcategory != null && (
          <div className="absoute bg-white ml-1">
            <ul>
              {categories[showSubcategory].subcategories.map(
                (sub, subIndex) => (
                  <li
                    key={subIndex}
                    onMouseEnter={() => handleSubcategoryHover(subIndex)}
                    className="relative text-black hover:bg-slate-200 hover:text-blue-500 hover:font-medium cursor-pointer p-2"
                  >
                    <a href="#">{sub.name} </a>
                    <span className="material-symbols-outlined float-right">
                      navigate_next
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        {showSubSubcategory != null && (
          <div className="absoute bg-white ml-1">
            <ul>
              {categories[showSubcategory].subcategories[
                showSubSubcategory
              ].subsubcategories.map((subsub, subsubIndex) => (
                <li
                  key={subsubIndex}
                  className="relative text-black hover:bg-slate-200 hover:text-blue-500 hover:font-medium cursor-pointer p-2"
                >
                  <a href="#">{subsub}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
