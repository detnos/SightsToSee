import React from 'react'

function RouteLine(props) {
    return (
        <div>
            <div className="grid-container">
                <div className="gird-item-r" id={props.route.id} >Route {props.route.id}</div>
                <div className="gird-item-r" id={props.route.id} >Number of Stops:</div>
                <div className="grid-item" id={props.route.id} >{props.route.stops}</div>
            </div>
            <br />
        </div>
    )
}

export default RouteLine;