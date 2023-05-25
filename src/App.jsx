import { Searchbar } from "./components/SearchBar/Searchbar";
import { Sidebar } from "./components/SideNavbar/Sidebar";
import { Filters } from "./components/Filters/Filters";
import { Hero } from "./components/Hero/Hero";
import { Maincards } from "./components/Cards/MainCards";
import { Traincards } from "./components/Cards/TrainCards";
import { Footer } from "./components/Footer/Footer";
import "./assets/style/app.css";
import "./assets/style/content.css";

export const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <div className="herobg">
          <Hero />
          <div className="searchbar">
            <Searchbar />
            <Filters />
            <Filters />
          </div>
        </div>
        <Maincards />
        <Traincards />
        <Footer />
      </div>
    </div>
  );
};
