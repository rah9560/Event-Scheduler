import React, { useState } from 'react';
import Popup from './Popup';



function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show,setshow]=useState(false)

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const renderCalendar = () => {
    

    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const calendarArray = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarArray.push(<div key={`empty-${i}`} className="calendar-cell"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
      calendarArray.push(
        <div
          key={`day-${day}`}
          className={`calendar-cell ${selectedDate.getDate() === day ? 'selected' : ''}`}
          onClick={() => {
            handleDateClick(currentDate);
            yourFunction( setshow(true));
          }}
          style={{ cursor: 'pointer' }}
        >
          {day}
        </div>
      );
    }
    
    

    return calendarArray;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const yourFunction = () => {};

  const goToPreviousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const month=monthNames[selectedDate.getMonth()]

  return (
    
    <div>
    <div className='absolute left-6 top-2 text-3xl md:absolute md:top-10 md:left-10 '>Welcome to Event Scheduler</div>
        <div className="absolute left-10 top-28 w-90 p-4 bg-gray-200 rounded-lg md:w-[500px] md:absolute md:top-52 md:left-28">
      <h2 className="text-lg font-semibold mb-4">{`${selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}</h2>
      <div className="grid grid-cols-7 gap-1">
        <div className="calendar-cell invisible md:visible">Sun</div>
        <div className="calendar-cell invisible md:visible">Mon</div>
        <div className="calendar-cell invisible md:visible">Tue</div>
        <div className="calendar-cell invisible md:visible">Wed</div>
        <div className="calendar-cell invisible md:visible">Thu</div>
        <div className="calendar-cell invisible md:visible">Fri</div>
        <div className="calendar-cell invisible md:visible">Sat</div>
        {renderCalendar()}
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={goToPreviousMonth}>Previous Month</button>
        <button onClick={goToNextMonth}>Next Month</button>
      </div>
    </div>
    {
        show &&
        <div>
            <Popup 
              day={selectedDate.getDate()}
              month={month}
              year={selectedDate.getFullYear()}
            />
        </div>
    }
    </div>
  );
}

export default MyCalendar;
