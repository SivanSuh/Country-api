import React, { useEffect, useState } from "react";
import './App.css';


function App() {
  const [ countries, setCountries] = useState([])
  const [ search, setSearch] = useState("");

  useEffect(() =>{
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(response => setCountries(response))
      
  })


  return (
    <div className="App">
      <h1 style={{color:"red"}}>Countries</h1>
          <div>
            <input onChange={ (event) => {
                setSearch(event.target.value)
            }} />
          </div>
            
            {countries.filter((country) =>{
              if(search === ""){
                return country
              }
              else if (country.name.toLowerCase().includes(search.toLocaleLowerCase())){
                return country
              }
            }).map((country) =>{
        return(
          <div>
          <div className="countries" key={country.name}>
              <h3 style={{color:"purple"}}>{country.name}</h3>
              <img className="flag" src={country.flag} alt={country.name} />
              <h2 style={{color:"skyblue"}}>Capital : {country.capital}</h2>
              <h3>{country.timezones}</h3>
          </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
