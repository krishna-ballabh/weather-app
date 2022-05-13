import React, { useEffect, useState } from "react";
function Tempapp() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mathura");

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=35d0fe7a4804b188e3573df9e1bf9628`);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="container-fluid bg-primary p-4" style={{ width: "300px", height: "400px" }}>
                <div>
                    <input type="search" className="border-1  rounded-pill m-auto" onChange={(event) => { setSearch(event.target.value); }} />
                </div>
                {!city ? (<p>No Data Found</p>) : (
                    <div className="text-center pt-5">
                        <h2>
                            <i className="fas fa-street-view">{search}</i>
                        </h2>
                        <h1>
                            {city.temp}°C
                        </h1>
                        <h6>
                            Min: {city.temp_min}°C | Max: {city.temp_max}°C
                        </h6>
                    </div>
                )}

            </div>
        </>
    );
}

export default Tempapp;