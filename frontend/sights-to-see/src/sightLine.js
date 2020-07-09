import React from 'react'

function SightLine(props) {
    // let name = props.item.name
    // let description = props.item.description

    return (
        <div>
            <div className="grid-container">
                <div className="grid-item-r">Sight Name:</div>
                <div className="grid-item">{props.sight.name}</div>
                <div className="grid-item-r">Sight location_id:</div>
                <div className="grid-item">{props.sight.location_id}</div>
                <div className="grid-item-r">Summary:</div>
                <div className="grid-item">{props.sight.summary}</div>
            </div>
            <br />
        </div>
    )
}

export default SightLine;