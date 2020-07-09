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
                                <RouteLine route={route} key={index} />
                            </Tooltip>
                        }
                    >
                        <Button variant="primary" id={route.id}>Route {route.id} </Button> 
                    </OverlayTrigger>
            )}
            </ButtonGroup>
        </React.Fragment> 
    )
}

export default RouteList;