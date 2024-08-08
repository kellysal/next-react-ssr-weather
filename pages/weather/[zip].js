import React from "react";
import moment from "moment";

function WeatherDetail({ results: query }) {

    // console.log(query);
    // console.log([query.list]);
    const WeatherDetail = query.list
    // console.log(WeatherDetail);

    return (
        <>

            <div className="text-center">
                <h1 className="text-xl font-bold leading-6 uppercase">{query.city ? (query.city.name) : null}</h1>
                <h2 className="text-sm uppercase">5 day / 3 hour forecast</h2>
            </div>

            <div className="flex items-center">
                <div className="flex-1 max-w-4x1 mx-auto p-10">
                    <ul role="list" className="grid sm:grid-cols-3 md:grid-cols-6 grid-rows-4 gap-8 grid-flow-row">
                        {WeatherDetail.map((q, index) =>
                            <li key={index} className="rounded-lg shadow-lg p-3">
                                <div className="justify-center min-w-0 flex-auto text-center items-center">
                                    <p className="text-xs font-bold leading-6">{moment(q.dt_txt).format('MM/D/YY hA')}</p>
                                    <img alt="weather-icon" src={`https://openweathermap.org/img/wn/${q.weather[0].icon}@2x.png`} className="h-12 w-12 mx-auto" />
                                    <h1 className="text-xl font-bold leading-6">{q.main.temp.toFixed()} °F</h1>
                                    <p className="text-xs leading-6 text-gray-500">{q.main.temp_min.toFixed()} °F | {q.main.temp_max.toFixed()} °F</p>
                                    <p className="text-xs font-bold leading-6 uppercase">{q.weather[0].description}</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        </>
    );
}

export async function getServerSideProps({ query }) {

    const zip = query.zip

    const API_KEY = '37a0ff4eed513516d6c5587a56af0e72'

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${API_KEY}&units=imperial`
    );

    const data = await res.json()

    const detail = data


    return {
        props: {
            zip,
            results: detail,
        },
    };
}

export default WeatherDetail;