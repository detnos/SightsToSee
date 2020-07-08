import React from 'react'

function RouteLine(props) {
    return (
        <div>
            <div className="grid-container">
                <div className="grid-item" id={props.route.id} >This {props.route.number_of_days} day route has {props.route.stops} stops through the scenic terrain of Yellowstone National Park.</div>
            </div>
            <br />
        </div>
    )
}

export default RouteLine;