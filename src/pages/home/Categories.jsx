import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 dishes)",
    image: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(48 dishes)",
    image: "/images/home/category/img3.png",
  },
  {
    id: 1,
    title: "Browse All",
    des: "(255 dishes)",
    image: "/images/home/category/img4.png",
  },
];

const Categories = () => {
  return (
    <div className="section-container py-16 ">
      <div className="text-center">
        <p className="text-red uppercase tracking-wide font-medium text-lg">
          Customer Favorites
        </p>
        <h2 className="text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
          Popular Categories
        </h2>
      </div>

      {/* Category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.image}
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1 ">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
