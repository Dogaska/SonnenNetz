import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Resources } from "./pages/Resources";
import { Projects } from "./pages/Projects";
import { ProjectOffer } from "./pages/ProjectOffer";
import { SurfaceOffer } from "./pages/SurfaceOffer";
import { InvestmentOffer } from "./pages/InvestmentOffer";
import { SurfaceFeatures } from "./pages/SurfaceFeatures";
import { InvestmentFeatures } from "./pages/InvestmentFeatures";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { PasswordResetRequest } from "./pages/PasswordResetRequest";
import { PasswordReset } from "./pages/PasswordReset";
import { BlogArticle } from "./pages/BlogArticle";
import ProtectedRoute from "./components/authentication/protected-route";
import { Chat } from "./components/chat/chat";

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:slug" element={<BlogArticle />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/surface-details/:slug/"
          element={<SurfaceFeatures />}
        />
        <Route
          path="/projects/investment-details/:slug"
          element={<InvestmentFeatures />}
        />

        {/*Offers*/}
        <Route element={<ProtectedRoute />}>
          <Route path="/projects/project-offer/*" element={<ProjectOffer />} />
          <Route path="/projects/surface-offer/*" element={<SurfaceOffer />} />
          <Route
            path="/projects/investment-offer/*"
            element={<InvestmentOffer />}
          />
          {/*Chat*/}
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:chat_id/:username" element={<Chat />} />

          {/*Features*/}
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/request/password-reset"
          element={<PasswordResetRequest />}
        />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
