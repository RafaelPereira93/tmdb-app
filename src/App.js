import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header";
import NewReleases from "./components/NewReleases";
import Trending from "./components/Trending";
import ByGender from "./components/ByGender";
import CompleteMovie from "./components/CompleteMovie";
import Page404 from "./components/404";
import Search from "./components/Search";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NewReleases />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/by-gender" element={<ByGender />} />
          <Route path="/movie/:movie" element={<CompleteMovie />} />
          <Route path="/search/:movie" element={<CompleteMovie />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
