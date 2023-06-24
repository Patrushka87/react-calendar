import React from 'react'
import { currentMonth, currentYear, months } from '../../utils/months'
import './Calendar.css'

const Calendar = () => {

    return (
        <div>
            <div>
                {months[currentMonth].name} - {
                    currentYear
                }
            </div>
            <div className='grid-container'>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                <div className='grid-item'>

                Grilla
                </div>
                
            </div>
        </div>
    )
}

export default Calendar
