import React from 'react'
import { currentMonth, currentYear, months } from '../../utils/months'

const Calendar = () => {

    return (
        <div>
            <div>
                {months[currentMonth].name} - {
                    currentYear
                }
            </div>
            <div>
                Grilla
            </div>
        </div>
    )
}

export default Calendar
