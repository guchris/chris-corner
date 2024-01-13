"use client";
import { useEffect, useState } from "react"

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'PST'
};

export default function DateSection() {
    const [date, setDate] = useState(new Date());
    let intervalId;

    // Dynamically update date
    function updateDate() {
      setDate(new Date())
    }

    useEffect(()=>{
        setInterval(updateDate, 60000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const dateString = date.toLocaleString('en-US', options);

    // Split the formatted date and time
    const [dateNode, monthNode, dayNode, yearNode, , timeNode] = dateString.split(' ');

    return (
      <p className="location-date">
        SEATTLE, WA <br />
        {dateNode} {monthNode} {dayNode} {yearNode} <br />
        {timeNode} PST
      </p>
    )
}