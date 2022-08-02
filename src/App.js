import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileSection from "./components/MobileSection";
import TopSection from "./components/TopSection";
import { useWindowWidth } from "@react-hook/window-size";
import Slider from "react-slick";
import {AiOutlineArrowRight} from "react-icons/ai"
import {MdPlace} from "react-icons/md";


function App() {
  const windowWidth = useWindowWidth();
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
  return (
    <div>
      <Header />
      {windowWidth < 640 && <div>
        <div className="container mx-auto bg-white flex justify-between items-center p-2">
          <div className="flex items-center">
            <span className="text-primary-color"><MdPlace size={22}/> </span>
            <h2>Teslimat Adresi Belirle</h2>
          </div>
          <div>
            <span>
              <AiOutlineArrowRight />
            </span>
            </div>        
        </div>
        <Slider {...settings}> 
            <img
              className=" object-cover w-full h-full"
              src="https://cdn.getir.com/misc/62e3a660bcdc0e7f05033059_banner_tr_1659086493117.jpeg"
              alt="getir"
            />    
            <img
              className="h-full object-cover w-full"
              src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1655191370129.jpeg"
              alt="getir"
            />
            <img
              className="h-full object-cover w-full"
              src="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
              alt="getir"
            />
          
        </Slider></div>}
      <TopSection />
      <Categories />
      {windowWidth >= 640 && <Campaigns />}
      <MobileSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
