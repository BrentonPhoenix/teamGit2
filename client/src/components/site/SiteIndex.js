
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
    const tmUrl = `https://app.ticketmaster.com/discovery/v2/events.json?city=${location}&apikey=cJ0AqzOLeUYwrliXTVymX95LwRveamFV`

    
    
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

        // fetch(tmUrl)
        // .then((response) => {
        //     return response.json();
        // })
        // .then((json) => {
        //     return cityEvents = json._embedded.events;
        //     // cityEvents.forEach(vents => setEvents(<p>{vents.name}</p>));
        //     // cityEvents.map((vents) => {
        //     //     setEvents(<p>{vents.name}</p>)
        //     // })
        // })
     }
    //  const tmFetch = () => {
    //     fetch(tmUrl)
    //     .then((response)=>{
    //         // console.log(response.json());
    //         return response.json();
    //     })
    //     .then((json) => {
    //         // console.log(json)
    //         //        cityEvents = json._embedded.events;
    //                 json._embedded.events.forEach(vents => <p>{vents.name}</p>);
    //                 // cityEvents.map((vents) => {
    //                 //     setEvents(<p>{vents.name}</p>)
    //                 // })
    //             })
    //     }

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
                    {/* <div className="eventsDiv">
                        <Button onClick={tmFetch()}> </Button>
                    </div> */}
                </Col>
            </Row>
        </Container>
        <Footer/>
        </div>
    );
};


export default SiteIndex;