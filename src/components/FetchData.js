import React, { useState, useEffect } from 'react';
import '../assets/styles/Suggestions.css'
import TypeAheadDropDown from './TypeAheadDropDown';

function FetchData() {
 
    const [data, setData] = useState([]);
 
    useEffect(() => {
        names()
    }, [])

    const names = async () => {
        const responce = await fetch('https://api.github.com/users');
        setData(await responce.json())
    }

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div className = "App">
        <h1> Fetch data from an api in react </h1>
        <TypeAheadDropDown
    suggestions={data.map((item)=>(item.login))}
  />  {
            data.map((item) => ( 
            <div className="suggestions-component" key = { item.id } >
                <img className="image-component" src={item.avatar_url} alt="avatart" />
                <p onClick={() => openInNewTab(item.html_url)}> { item.login } </p>
                
            </div>
                
            ))
            
        }
    </div>
    );
    
}
 
export default FetchData;