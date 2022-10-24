//  import hlogo from './assest/hlogo.jpg'
import React from "react";
import { ArrowLeft  } from 'react-bootstrap-icons';
import "./side.css";
 import { FaListUl } from "react-icons/fa";

const Side = () => {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label for="check">
        <div id="btn"> <FaListUl className="icons"/></div>
        <div id="cancel"><ArrowLeft /></div>
      </label>
      <div class="sidebar">
        <header>My Menu</header>
        <div className="heading">
          <div>
            <span>Shortcuts</span>
          </div>
          <div>
            <span>Shortcuts</span>
          </div>
          <div>
            <span>Shortcuts</span>
          </div>

          <div>
            <span>Shortcuts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
