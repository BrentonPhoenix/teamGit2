
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

     return(

        <div>
            <Header tempreture={tempreture} fahrenheit={fahrenheit} setTempreture={setTempreture}/>
            <Container >
                <Row>
                    <Col >
            <div>
                    <img src={url} width="100%" height="auto"/>
            </div>
            </Col>
            </Row>
            <div>
            <Row>
                <Input placeholder="Enter City Name" type="text" value={location} onChange={(e)=> setLocation(e.target.value)} ></Input>
                <Button value={location} onClick={controlFetch}>Get City Temp!</Button>
                </Row>
            </div>
            </Container>
            <Footer/>
        </div>
    );
};


export default SiteIndex;