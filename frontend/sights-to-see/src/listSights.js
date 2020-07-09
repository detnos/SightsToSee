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
                        src="https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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