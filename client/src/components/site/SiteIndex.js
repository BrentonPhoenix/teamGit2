// NASA fetch url with Richard's key
// https://api.nasa.gov/planetary/earth/imagery?api_key=ezYsQEwxtd6xWCyvWaKifwQHYgpjeOVrPfpBFMI4

const SiteIndex = () => {

    fetch("https://api.nasa.gov/planetary/earth/imagery?api_key=ezYsQEwxtd6xWCyvWaKifwQHYgpjeOVrPfpBFMI4")
    .then(function(response){
        console.log(response.json());
        return response.json();
    })
    .then(function(json){
        console.log(json.data)
    })
    .catch(err => console.log(err));

    return(
        <div className="main">
            <div className="mainDiv">
                <h1>This is the SiteIndex page!</h1>
            </div>
        </div>
    )
}

export default SiteIndex;