import React, { useState } from "react";
import "./index.css";
import "./FormattedDate";
import axios from "axios";

export default function WeatherForecast(props) {
  // let [load, setLoad] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    // setLoad(true);
    //console.log(response.data);
  }
//   console.log(forecast);
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  //let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiKey = "14e8b2oefd0f8a35ca5498abfa5edtb2";
  //let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className=" pt-5">
      <div className="container">
        <div className="row">
          <div className="col-2 sm-text-center WeatherForecast">
            <div>Tue</div>
            <div>icon</div>
            <div>
              001
              {/* 0//{forecast.temp.min}/{forecast.temp.min} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  //   if (load) {
  //     return (
  //       <div className=" pt-5">
  //         <div className="container">
  //           <div className="row">
  //             <div className="col-2 sm-text-center WeatherForecast">
  //               <div>Tue</div>
  //               <div>icon</div>
  //               <div>
  //                 00
  //                 {/* 0//{forecast.temp.min}/{forecast.temp.min} */}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     let longitude = props.coordinates.lon;
  //     let latitude = props.coordinates.lat;
  //     //let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  //     let apiKey = "14e8b2oefd0f8a35ca5498abfa5edtb2";
  //     //let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  //     let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  //     axios.get(apiUrl).then(handleResponse);
  //     return "Loading.....";
  //   }
}
