import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLayout,
  toggleMenu,
} from "../../app/features/layout/layoutSlice";

const Hamburger = () => {
  const dispatch = useDispatch();

  const { toggleHamburger } = useSelector(selectLayout);

  const onToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className>
      <div
        className={`menu ${toggleHamburger ? "open-menu" : ""}`}
        onClick={() => onToggle()}
      >
        <div>
          <span className='line-1'></span>
          <span className='line-2'></span>
          <span className='line-3'></span>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
