import {
    Navbar,
    NavbarBrand,
    Nav,
    Button,
    NavItem,
    NavLink,
    Input
} from 'reactstrap';
import { useState, useEffect } from 'react';

const Header = () => {
    const [ fahrenheit, setFahrenheit ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ tempreture, setTempreture ] = useState(true);
    const [ coordLat,setCoordLat ] = useState('')
    const [ coordLong,setCoordLong ] = useState('')
    const properLat = coordLat
    const properLon = coordLong
    const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${properLon}&lat=${properLat}&date=2014-02-01&api_key=idXEiUvlW0u3WxBGs0DgkSsPEG83g7uEdxpHKK1w`
    
    // get location, display location in header(centered), display onload, 
     function controlFetch() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=59001e1f469d421690b543e76dbf29d3`
        )
        .then((response)=>{
            // console.log(response.json());
            return response.json();
        })
        .then((json) =>{
            setFahrenheit(json.main.temp)
            setCoordLat(json.coord.lat)
            setCoordLong(json.coord.lon)
        
            // setCelsius((fahrenheit - 32) * .5556)
            
        })
     }

    //  function nasaFetch(){
    //     fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${properLon}&lat=${properLat}&date=2014-02-01&api_key=idXEiUvlW0u3WxBGs0DgkSsPEG83g7uEdxpHKK1w`
    //     )
    //     .then((response)=>{
    //         // console.log(response.json());
    //         return response.json();
    //     })
    //  }
//no fetch just image tag?
    

    
    
    //Look for an API with coordinants of cities tie to location to get Nasa pic
    //Number((value).toFixed(decimalplaces))
    //Number((89.467382).toFixed(4))// would give you 89.4673 





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
                <NavbarBrand>Team 2 24 Hour project</NavbarBrand>
                <div>
                    <img src={url} height='500px' width='auto'/>
                </div>
                <Nav className='ml-auto' navbar>
                        {/* {location} */}
                        {
                            tempreture ? <h2>{fahrenheit}ºF</h2> : <h2>{(fahrenheit - 32) * .5556}ºC</h2>
                        }
                        <Button value={tempreture} onClick={(e) => setTempreture(!tempreture)}>Toggle unit of measurement!</Button>
                    {/* <NavItem>
                        <NavLink href='https://github.com/yourhandle/yourRepoForThisApp'>
                            Github
                            </NavLink>
                    </NavItem> */}
                    <div>
                    <Input placeholder="Enter City Name" type="text" value={location} onChange={(e)=> setLocation(e.target.value)} ></Input>
                    <Button value={location} onClick={controlFetch}>Get City Temp!</Button>
                    </div>
                    <div>
                        {/* {coordLat}
                        {coordLong} */}
                    </div>

                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;