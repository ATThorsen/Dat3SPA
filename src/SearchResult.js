import React, { useState, useEffect } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";

export default function SearchResult({ allData }) {
  const { OpenCageDTO, weatherDTO, NASADTO } = allData;
  console.log("This is data in Search Results" + NASADTO);

  return (
    <div className="container">
      <img height="500" width="500"src={`data:image/jpeg;base64,${NASADTO.img}`} />

      <p>TimeZone: {allData.weatherDTO.timezone}</p>

      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
