import React from 'react'
import SightLine from './sightLine.js'
import { Carousel } from 'react-bootstrap';

function SightList(props) {

    return (
        <React.Fragment>
            <Carousel className="Carousel">
            {props.sights.map((sight, index) => 
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.freecreatives.com/wp-content/uploads/2016/02/Solid-Gray-Background-for-Free.jpg"
                        alt={`slide ${sight.id}`}
                    />
                    <Carousel.Caption>
                        <SightLine sight={sight} key={index} />
                    </Carousel.Caption>
                </Carousel.Item>
            )}
            </Carousel>
        </React.Fragment>
    )
}

export default SightList;