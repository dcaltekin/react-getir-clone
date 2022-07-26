import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileSection from "./components/MobileSection";
import TopSection from "./components/TopSection";


function App() {
  return (
    <div>
      <Header />
      <TopSection />
      <Categories />
      <Campaigns />
      <MobileSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
