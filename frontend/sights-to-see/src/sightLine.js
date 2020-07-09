import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function SightLine(props) {
    // let name = props.item.name
    // let description = props.item.description

    return (
        <Container>
            <Row>
                <Col><h4>{props.sight.name}</h4></Col>

            </Row>
            <Row className="justify-content-md-left">
                <br />
                <Col>
                    <div style={{"padding-right": "10px"}}>
                    <img
                        src={props.sight.sight_image}
                        alt={`slide ${props.sight.id}`}
                    />
                    <br />
                    </div>
                </Col>
                <Col><div style={{"text-align": "left"}}>{props.sight.summary}</div></Col>
            </Row>

            <Row>
                <Col></Col>
            </Row>
            <Row className="justify-content-md-right">
                <Col sm="auto">open 0{props.sight.time_open}-{props.sight.time_close}</Col>
                <Col className="toRight">{props.sight.days_open} </Col>
            </Row>
        </Container>
    )
}

export default SightLine;