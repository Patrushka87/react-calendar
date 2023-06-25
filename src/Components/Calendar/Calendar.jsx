import React from "react";
import { currentMonth, currentYear, months } from "../../utils/months";
import "./Calendar.css";

const Calendar = () => {
  return (
    <>
      <div className="header-grid-container">
        <div className="month">
          <button className="button">{"<"}</button>
          {months[currentMonth].name} - {currentYear}
          <button className="button">{">"}</button>
        </div>
        <div>
          <button className="button">{"<"}</button>
          <button className="button"> {">"} </button>
        </div>
      </div>
      <div className="calendar-grid-container">
        <div className="grid-item">Mon</div>
        <div className="grid-item">Tue</div>
        <div className="grid-item">Wed</div>
        <div className="grid-item">Thu</div>
        <div className="grid-item">Fri</div>
        <div className="grid-item">Sat</div>
        <div className="grid-item">Sun</div>
        <div className="grid-item">Grilla</div>
        <div className="grid-item">Grilla</div>
        <div className="grid-item">Grilla</div>
        <div className="grid-item">Grilla</div>
        <div className="grid-item">Grilla</div>
      </div>
    </>
  );
};

export default Calendar;
