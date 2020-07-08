import React from 'react'

function Map(props) {
/*
Route1: 'https://www.mapquest.com/embed/my-maps/49b854c5-0818-4356-84a3-2ec713d49f5a?center=44.83834308566653,-110.77377319335936&zoom=10&maptype=map'
Route2: 'https://www.mapquest.com/embed/my-maps/cfa01c10-e130-4c62-bff6-956c40713c51?center=44.538121733294545,-110.68519592285159&zoom=10&maptype=map'
Route3  'https://www.mapquest.com/embed/my-maps/944eaf4c-3071-4533-881f-2bca302c0407?center=44.71746544499776,-110.42633056640625&zoom=9&maptype=map'
*/
console.log('props.route: ', props.route)
    return (
        <iframe title="Map" height="500" width="500" border="0" marginwidth="0" marginheight="0" src={props.route}></iframe>
    )
}

export default Map;