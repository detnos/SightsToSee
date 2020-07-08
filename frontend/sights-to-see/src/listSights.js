import React from 'react'
import SightLine from './sightLine.js'

function SightList(props) {

    return (
        <React.Fragment>
            <h3>Sights:</h3>
            {props.sights.map((sight, index) => <SightLine sight={sight} key={index} />)}
        </React.Fragment>
    )
}

export default SightList;