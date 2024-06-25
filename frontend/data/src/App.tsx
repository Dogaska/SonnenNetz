import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Resources } from "./pages/Resources";
import { Projects } from "./pages/Projects";
import { ProjectOffer } from "./pages/ProjectOffer";
import { SurfaceOffer } from "./pages/SurfaceOffer";
import { InvestmentOffer } from "./pages/InvestmentOffer";
import { ProjectFeatures } from "./pages/ProjectFeatures";
import { SurfaceFeatures } from "./pages/SurfaceFeatures";
import { InvestmentFeatures } from "./pages/InvestmentFeatures";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { BlogArticle } from "./pages/BlogArticle";

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/resources/" element={<Resources />} />
        <Route path="/resources/*" element={<BlogArticle />} />
        <Route path="/projects/" element={<Projects />} />
        {/*Offers*/}
        <Route path="/projects/project-offer/*" element={<ProjectOffer />} />
        <Route path="/projects/surface-offer/*" element={<SurfaceOffer />} />
        <Route
          path="/projects/investment-offer/*"
          element={<InvestmentOffer />}
        />
        {/*Features*/}
        <Route
          path="/projects/project-features/*"
          element={<ProjectFeatures />}
        />
        <Route
          path="/projects/surface-features/*"
          element={<SurfaceFeatures />}
        />
        <Route
          path="/projects/investment-features/*"
          element={<InvestmentFeatures />}
        />
        <Route path="/about/" element={<About />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/login/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
