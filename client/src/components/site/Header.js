import React, {useState} from "react"
import {
    Navbar,
    NavbarBrand,
    Nav,
    Button,
    NavItem,
    NavLink,
    Input
} from 'reactstrap';




const Header = (props) => {




    return(
        <header>
        <Navbar className='header'>
            <NavbarBrand className="link">Team 2 24 Hour project</NavbarBrand>
            
            <Nav className='ml-auto' navbar>
                    {/* {location} */}
                    {
                        props.tempreture ? <h2>{props.fahrenheit}ºF</h2> : <h2>{(props.fahrenheit - 32) * .5556}ºC</h2>
                    }
                    <Button value={props.tempreture} onClick={(e) => props.setTempreture(!props.tempreture)}>Toggle unit of measurement!</Button>
                {/* <NavItem>
                    <NavLink href='https://github.com/yourhandle/yourRepoForThisApp'>
                        Github
                        </NavLink>
                </NavItem> */}
                
                <div>
                    {/* {coordLat}
                    {coordLong} */}
                </div>

            </Nav>
        </Navbar>
    </header>
    )
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


   export default Header
