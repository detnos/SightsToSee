import React from 'react'
import RouteLine from './routeLine.js'
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

function RouteList(props) {

    return (

        <React.Fragment>
            <ButtonGroup aria-label="Basic example">
                {props.routes.map((route, index) => <Button variant="secondary"><RouteLine route={route} key={index} /> </Button> )}
            </ButtonGroup>
        </React.Fragment>

    )
}

export default RouteList;