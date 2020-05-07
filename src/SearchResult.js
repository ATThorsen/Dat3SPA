import React, { useState, useEffect } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";

export default function SearchResult(props) {
  console.log( props)
  let  NASADTO = props.allData.NASADTO;
  console.log (NASADTO)
  const { data } = props;

  setTimeout(4000); {

  
  if ( props !== undefined ) {
   let json = JSON.stringify(NASADTO)
   console.log(json)
  

    console.log("test " +data);
    console.log(NASADTO)
    setTimeout(4000);
    
      return (
          <div className="container">
            <img src={`data:image/jpeg;base64,${NASADTO}`} />
      <h2> HEJ HEJ </h2>
            <div></div>
          </div>
        );
  

  }
}


  
  return (
    <div className="container">
      <h1>HEJ  </h1>
      

      <div></div>
    </div>
  )

  
  
  }
