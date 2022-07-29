import { useEffect, useState } from "react";
import data from "../api/categories.json";
function Categories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(data);
  }, []);
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto w-9/12 mt-8">
        <h2 className="text-sm font-semibold mb-4">Kategoriler</h2>
        <div className="grid grid-cols-10">
          
          {categories &&
            categories.map((category, index) => (
              <div key={index}>
                <div className="flex flex-col items-center group gap-y-2 text-center p-4 transition hover:bg-gray-100 cursor-pointer">
                  <img
                    className="w-12 h-12 rounded border border-gray-200"
                    src={category.image}
                    alt={category.title}
                  />
                  <span className="text-sm whitespace-nowrap text-gray-700 group-hover:text-primary-color tracking-tight">
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
