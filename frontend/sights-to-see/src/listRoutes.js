import React from 'react'
import RouteLine from './routeLine.js'
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

function RouteList(props) {
    const placement = ['bottom-start', 'bottom', 'bottom-end']
    return (

        <React.Fragment>
            <ButtonGroup toggle aria-label="Basic example">
                {props.routes.map((route, index) => 
                    <OverlayTrigger
                        key={placement[index]}
                        placement={placement[index]}
                        overlay={
                            <Tooltip id={`tooltip-${placement[index]}`}>
                                <RouteLine key={index} route={route} />
                            </Tooltip>
                        }
                    >
                        <Button variant="outline-dark" id={route.id}>Route {route.id} </Button> 
                    </OverlayTrigger>
            )}
            </ButtonGroup>
        </React.Fragment> 
    )
}

export default RouteList;