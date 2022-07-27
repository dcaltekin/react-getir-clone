import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
function TopSection() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+9",
    DE: "+10",
    IT: "+11",
    TR: "+90",
    FR: "+8",
    GB: "+7",
  };
  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {" "}
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            alt="getir"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            alt="getir"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center   absolute top-0  h-full z-20">
        <div className="ml-12 2xl:ml-40">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="getir"
          />
          <h3 className="text-white text-lg 2xl:text-5xl xl:text-4xl mt-8">
            Dakikalar içinde
            <br />
            kapınızda
          </h3>
        </div>
        <div className="w-72 2xl:w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-color font-medium text-center mb-3">
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex gap-x-1 ">
            <div className="">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
              />
            </div>
            <label className="relative block cursor-pointer">
              <input
                required
                type="text"
                className="pt-2 h-11 px-4 border-2 border-gray-300 rounded w-full transition-colors hover:border-primary-color outline-none focus:border-primary-color peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-700 peer-focus:h-5 transition-all peer-focus:primary-color peer-focus:text-xs peer-valid:primary-color peer-valid:text-xs peer-valid:h-5">
                Telefon numarası
              </span>
            </label>
          </div>
          <button className="mt-4 bg-[#ffd300] h-12 flex items-center justify-center rounded-lg w-full text-primary-color text-sm text-semibold hover:bg-primary-color hover:text-[#ffd300] transition-colors">
            Telefon numarasıyla devam et
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
