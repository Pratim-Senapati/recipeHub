"use client";

import classes from "./placeholders-input.module.css";
import { useState, useEffect } from "react";

export default function PlaceHoldersInput() {
  const values = [
    "Juicy Cheese Burger",
    "Homemade Dumplings",
    "Authentic Pizza",
    "Fresh Tomato Salad",
    "and many more...",
  ];
  const [index, setindex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setindex((prevIndex) => (prevIndex + 1) % values.length);
        setFadeClass("fade-in");
      }, 800);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    if (inputValue) {
      const searched = inputValue.replace(/\s/g, "-").toLowerCase();
      window.location.href = `/search/${searched}`;
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.search_container}>
        <input
          className={
            classes.input + " " + `${!inputValue ? classes[fadeClass] : ""}`
          }
          type="text"
          onChange={handleChange}
          placeholder={values[index]}
        />
        <button className={classes.button} onClick={handleSubmit}>
          <svg viewBox="0 0 24 24" className={classes.search__icon}>
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
