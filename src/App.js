import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";

import HomePage from "./pages/HomePage/index.js";
import BooksListPage from "./pages/BooksListPage/index.js";
import ContactUsFormPage from "./pages/ContactUsFormPage/index.js";

import AboutUsPage from "./pages/AboutUsPage/index.js";
import AboutUsMissionPage from "./pages/AboutUsPage/Mission.js";
import AboutUsPrivacyPage from "./pages/AboutUsPage/Pivacy.js";
import AboutUsIntroductionPage from "./pages/AboutUsPage/Introduction.js";

import NotFoundPage from "./pages/NotFoundPage/index.js";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/Chapterverse-Web/" element={<HomePage />} />

        <Route path="/books" element={<BooksListPage />} />
        <Route path="/contact-us" element={<ContactUsFormPage />} />

        <Route path="/about-us" element={<AboutUsPage />}>
          <Route path="" element={<AboutUsIntroductionPage />} />
          <Route path="mission" element={<AboutUsMissionPage />} />
          <Route path="privacy" element={<AboutUsPrivacyPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}
