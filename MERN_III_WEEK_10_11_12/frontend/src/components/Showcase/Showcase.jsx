import { useState } from "react";

const projects = [
  { id: 1, name: "Project Name - 1", category: "Frontend" },
  { id: 2, name: "Project Name - 2", category: "MERN" },
  { id: 3, name: "Project Name - 3", category: "Frontend" },
  { id: 4, name: "Project Name - 4", category: "Frontend" },
  { id: 5, name: "Project Name - 5", category: "UI/UX" },
  { id: 6, name: "Project Name - 6", category: "Backend" },
  { id: 7, name: "Project Name - 7", category: "Backend" },
  { id: 8, name: "Project Name - 8", category: "Backend" },
  { id: 9, name: "Project Name - 9", category: "Backend" },
  { id: 10, name: "Project Name - 10", category: "Backend" },
  { id: 11, name: "Project Name - 11", category: "Backend" },
];

const Showcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Frontend", "MERN", "Backend", "UI/UX"];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="w-[100%] h-screen -mt-11 flex flex-col justify-center items-start">
      <div className="relative top-16 left-5 w-[94.5%]">
        <div>
          <p className="text-3xl font-semibold">
              Project <span className="text-[#E79600]">Panorama</span>
            </p>
        </div>
        <div>
          <div className="relative top-1 right-0 w-12 h-0.5 bg-white rounded-b-lg"></div>
          {/* Filter Buttons */}
          <div className="flex gap-4 my-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative right-5 px-6 py-2 text-xl font-semibold ${
                  selectedCategory === category
                    ? "text-[#E79600] underline"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="w-full h-96 relative left-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="w-96 h-64 p-6 bg-purple-700 rounded-xl shadow-md text-center border border-purple-500 cursor-pointer"
              >
                <h2 className=" text-xl font-bold">{project.name}</h2>
                {/* <p className="text-yellow-300 capitalize mt-2">{project.category}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
