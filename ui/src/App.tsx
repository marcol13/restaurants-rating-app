import React from "react";
import { MainPage } from "./pages/mainPage/MainPage";
import { AddNewPage } from "./pages/addNewPage/AddNewPage";
import { EditPage } from "./pages/editPage/EditPage";
import { Routes, Route } from "react-router-dom";
import "./assets/style/index.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddNewPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
