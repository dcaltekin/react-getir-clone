import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

import Menu from "../components/Menu";
function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "Teknoloji Kariyerleri",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Sıkça Sorulan Sorular",
        },
        {
          title: "Kişisel Verilerin Korunması",
        },
        {
          title: "Gizlilik Politikası",
        },
        {
          title: "Kullanım Koşulları",
        },
        {
          title: "Çerez Politikası",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Bayimiz Olun",
        },
        {
          title: "Deponuzu Kiralayın",
        },
        {
          title: "GetirYemek Restoranı Olun",
        },
        {
          title: "GetirÇarşı İşletmesi Olun",
        },
        {
          title: "Zincir Restoranlar",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto w-11/12 sm:w-9/12 mt-10">
        <div className="flex flex-col sm:grid sm:grid-cols-4 pt-10 ">
          <section>
            <div className="grid gap-y-3">
              <h6 className="text-lg text-primary-color">Getir'i indirin</h6>
              <a href="/" className="transition-all transform hover:scale-95">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="getir"
                />
              </a>
              <a href="/" className="transition-all transform hover:scale-95">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="getir"
                />
              </a>
              <a href="/" className="transition-all transform hover:scale-95">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="getir"
                />
              </a>
            </div>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center pt-8 pb-10 gap-y-4">
          <div className="text-xs text-gray-700 flex gap-x-8  ">
            2022 Getir{" "}
            <span className="text-primary-color">Bilgi Toplumu Hizmetleri</span>
          </div>

          <div className="flex gap-x-3">
            <span className="w-8 h-8 rounded-lg text-gray-500  hover:opacity-70 flex items-center justify-center hover:text-primary-color transition-colors cursor-pointer">
              <FaFacebook size={22} />
            </span>
            <span className="w-8 h-8 rounded-lg text-gray-500  hover:opacity-70 flex items-center justify-center hover:text-primary-color transition-colors cursor-pointer">
              <FaTwitter size={22} />
            </span>
            <span className="w-8 h-8 rounded-lg text-gray-500  hover:opacity-70 flex items-center justify-center hover:text-primary-color transition-colors cursor-pointer">
              <FaInstagram size={22} />
            </span>
            <span className="h-8 flex items-center px-2 border border-gray-100 text-sm gap-x-2 rounded text-gray-500 hover:opacity-70 hover:text-primary-color hover:border-transparent transition-colors cursor-pointer">
              <BiGlobe size={17} />
              Türkçe (TR)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
