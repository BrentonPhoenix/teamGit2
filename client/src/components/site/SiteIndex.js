
import {
    Button,
    Input,Col,
     Row, Container
} from 'reactstrap';
import { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer';

const SiteIndex = () => {
    const [ fahrenheit, setFahrenheit ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ tempreture, setTempreture ] = useState(true);
    const [ coordLat,setCoordLat ] = useState('')
    const [ coordLong,setCoordLong ] = useState('')
    const [ events, setEvents ] = useState([])
    const properLat = coordLat
    const properLon = coordLong
    const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${properLon}&lat=${properLat}&date=2014-02-01&api_key=ezYsQEwxtd6xWCyvWaKifwQHYgpjeOVrPfpBFMI4`
    const tmUrl = `https://app.ticketmaster.com/discovery/v2/events.json?city=${location}&apikey=weIBTljaxAkS7ayMhRWHzG4huWEhWC08`

    
    
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

        fetch(tmUrl)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            const cityEvents = json._embedded.events;
            cityEvents.forEach(vents => setEvents(<p>{vents.name}</p>));

            // cityEvents.map((vents, index) => {
            //     return setEvents(<p key={index}>{vents.name}</p>)
            // })
            
            // {cityEvents.map((events, index) => (
            //     <div key={index}>
            //         <h3>{events.name}</h3>
            //     </div>
            // ))};
        });
     }

     return(

        <div className="main">
        <Header tempreture={tempreture} fahrenheit={fahrenheit} setTempreture={setTempreture}/>
        <Container >
            <Row>
                <Col >
                    <div className="mainDiv">
                    {/* <Row> */}
                        <Input placeholder="Enter City Name" type="text" value={location} onChange={(e)=> setLocation(e.target.value)} ></Input>
                        <Button value={location} onClick={controlFetch}>Search City!</Button>
                        <hr/>
                    {/* </Row> */}
                    </div>
                    <div className="mainDiv">
                        <img src={url} width="100%" height="auto"/>
                        <hr/>
                    </div>
                    <div className="eventsDiv">
                        {events}
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </div>
    );
};


export default SiteIndex;