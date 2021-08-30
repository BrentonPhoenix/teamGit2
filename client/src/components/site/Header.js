import {
    Navbar,
    NavbarBrand,
    Nav,
    Button,
    NavItem,
    NavLink
} from 'reactstrap';
import { useState, useEffect } from 'react';

const Header = () => {
    const [ fahrenheit, setFahrenheit ] = useState('fahrenheit');
    const [ celsius, setCelsius ] = useState('celsius');
    const [ tempreture, setTempreture ] = useState(false);

    
    // get location, display location in header(centered), display onload, 
    // function stopFetch() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=59001e1f469d421690b543e76dbf29d3"
        )
        .then((response)=>{
            // console.log(response.json());
            return response.json();
        })
        .then((json) =>{
            setFahrenheit(json.main.temp)
            setCelsius((fahrenheit - 32) * .5556)
            
        })
    // }


    

    
    






    // function getLocation() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(showPosition);
    //     } else {
    //       let failedGeo = "Geolocation is not supported by this browser.";
    //     }
    //   }
      
    //   function showPosition(position) {
    //     x.innerHTML =
    //       "Latitude: " +
    //       position.coords.latitude +
    //       "<br>Longitude: " +
    //       position.coords.longitude;
    //   }
      
    
    // useEffect((e)=>{
    //     getLocation()
    // }, [])


    return(
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'>Team 2 24 Hour project</NavbarBrand>
                <Nav className='ml-auto' navbar>
                        {/* {location} */}
                        {
                            tempreture ? <h2>{fahrenheit}ºF</h2> : <h2>{celsius}ºC</h2>
                        }
                        <Button value={tempreture} onClick={(e) => setTempreture(!tempreture)}>Toggle unit of measurement!</Button>
                    {/* <NavItem>
                        <NavLink href='https://github.com/yourhandle/yourRepoForThisApp'>
                            Github
                            </NavLink>
                    </NavItem> */}
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;