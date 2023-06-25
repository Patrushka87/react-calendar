import React from "react";
import { currentMonth, currentYear, months } from "../../utils/months";
import "./Calendar.css";
import { useState } from "react";

const Calendar = () => {

    const [selectedMonth, setSelectedMonth] = useState(currentMonth)

    const increase = () => {
        setSelectedMonth(selectedMonth + 1)

    }

    const decrease = () => {
        setSelectedMonth(selectedMonth - 1)

    }


    return (
        <>
            <div className="header-grid-container">
                <div className="month">
                    <button className="button" disabled={selectedMonth <= 0} onClick={decrease}> {"<"} </button>
                    <p className="months">

                    {months[selectedMonth].name}
                    </p>
                    <button className="button" disabled={selectedMonth >= 11} onClick={increase}> {">"} </button>
                </div>

                {/* <div className="month">
                    <button className="button" onClick={() => { setSelectedMonth((prevState) => prevState - 1) }}>{"<"}</button> {months[selectedMonth].name} <button className="button" onClick={() => { setSelectedMonth((prevState) => prevState + 1) }}>{">"}</button>
                </div> */}

                <div className="month">
                    <button className="button">{"<"}</button>
                    <p className="year">
                        {currentYear}
                    </p>
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
