import { useEffect, useState } from "react";
import data from "../api/categories.json";
function Categories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(data);
  }, []);
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto w-full sm:w-9/12 mt-8">
        <h2 className="text-sm font-semibold mb-4 ml-6 sm:ml-0">Kategoriler</h2>
        <div className="grid grid-cols-4 xl:grid-cols-10 2xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-6">
          {categories &&
            categories.map((category, index) => (
              <div key={index}>
                <div className="flex flex-col items-center group gap-y-2 text-center p-4 transition hover:bg-gray-100 cursor-pointer">
                  <img
                    className="w-12 h-12 rounded border border-gray-200"
                    src={category.image}
                    alt={category.title}
                  />
                  <span className="text-sm xl:whitespace-nowrap 2xl:whitespace-nowrap lg:whitespace-nowrap  text-gray-700 group-hover:text-primary-color tracking-tight">
                    {category.title}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
