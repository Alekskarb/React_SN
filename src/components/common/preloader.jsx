import React from 'react';
import loader from "../../assets/load.gif";

const Preloader = (props) => {
  return <div>
  <img src={loader} alt={'preload'}/>
    </div>
};

export default Preloader;