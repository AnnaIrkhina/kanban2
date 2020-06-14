import React, {useState} from 'react';


const objToday = new Date();

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = weekday[objToday.getDay()];
const dayOfMonth = (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const curMonth = months[objToday.getMonth()];
const curYear = objToday.getFullYear();

const today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

function Footer(props) {

  return (
    <div className="container">
      <h5>Today {today}</h5>
        {/*<div className="row">*/}
        {/*    <div className="col" >I have Todo:{props.todo}</div>*/}
        {/*    <div className="col" >In progress:{props.inProgress}</div>*/}
        {/*    <div className="col" >For review:{props.review}</div>*/}
        {/*    <div className="col" >Done:{props.done}</div>*/}
        {/*</div>*/}
    </div>
  );
}

export default Footer;
