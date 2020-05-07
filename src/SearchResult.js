import React, { useState, useEffect } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";

export default function SearchResult(props) {
  const { data } = props;
  const NASADTO = data.NASADTO;

  console.log(data);
  console.log(NASADTO)
  
    return (
        <div className="container">
          <img src={`data:image/jpeg;base64,${NASADTO}`} />
    
          <div></div>
        </div>
      );

  
  
}
