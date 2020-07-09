import React from 'react';
import './App.css';
import RouteList from './listRoutes';
import SightList from './listSights';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card, Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      locations: [],
      sights: [],
      currentSights : [],
      sightTitle : "All Sights",
      route4map : 'https://www.mapquest.com/embed/my-maps/2fd83602-cf58-4a04-93a9-e7f7f2ef99bb?center=44.70575417971902,-110.55953979492188&zoom=9&maptype=map'
    }
    this.fetchRoutes = this.fetchRoutes.bind(this)
    this.fetchLocations = this.fetchLocations.bind(this)
    this.fetchSights = this.fetchSights.bind(this)
    this.chooseRoute = this.chooseRoute.bind(this)
  }

  chooseRoute(e) {
    console.log("in chooseRoute function")
    console.log('id of the target: ', e.target.id);
    let locationIds, routeSights;
    if (e.target.id === '1') {
      locationIds = [this.state.routes[0].stop1, this.state.routes[0].stop2]
      routeSights = this.state.sights.filter(sight => sight.location_id === locationIds[0] || sight.location_id === locationIds[1])
      this.setState({ route4map : this.state.routes[0].maplink, currentSights : routeSights, sightTitle : "Sights for Route 1" })
    } else if (e.target.id === '2') {
      locationIds = [this.state.routes[1].stop1, this.state.routes[1].stop2, this.state.routes[1].stop3]
      routeSights = this.state.sights.filter(sight => sight.location_id === locationIds[0] || sight.location_id === locationIds[1] || sight.location_id === locationIds[2])
      this.setState({ route4map: this.state.routes[1].maplink, currentSights: routeSights, sightTitle : "Sights for Route 2" })
    } else if (e.target.id === '3') {
      locationIds = [this.state.routes[2].stop1, this.state.routes[2].stop2, this.state.routes[2].stop3, this.state.routes[2].stop4]
      routeSights = this.state.sights.filter(sight => sight.location_id === locationIds[0] || sight.location_id === locationIds[1] || sight.location_id === locationIds[2] || sight.location_id === locationIds[3])
      this.setState({ route4map: this.state.routes[2].maplink, currentSights: routeSights, sightTitle: "Sights for Route 3" })
    } else {
      this.setState({ route4map: 'https://www.mapquest.com/embed/my-maps/2fd83602-cf58-4a04-93a9-e7f7f2ef99bb?center=44.70575417971902,-110.55953979492188&zoom=9&maptype=map', currentSights: this.state.sights, sightTitle: "All Sights" })
    }

  }

  async fetchRoutes() {
    await fetch(`http://localhost:3001/routes`)
      .then((response) => response.json())
      .then((json) => { this.setState({ routes: json }) })
  }
  async fetchLocations() {
    await fetch(`http://localhost:3001/locations`)
      .then((response) => response.json())
      .then((json) => { this.setState({ locations: json }) })
  }

  async fetchSights() {
    await fetch(`http://localhost:3001/sights`)
      .then((response) => response.json())
      .then((json) => { this.setState({ sights: json, currentSights: json }) })
  }

  render() {
    if (this.state.routes.length === 0) {
      this.fetchRoutes()
    }
    if (this.state.locations.length === 0) {
      this.fetchLocations()
    }
    if (this.state.sights.length === 0) {
      this.fetchSights()
    }

    return (
      <div className="App">  
        <Accordion defaultActiveKey="0">
          <Card bg="light">
            <Card.Header>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                Routes
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Container className="Card">
                    <Row>
                      <Col>
                        <div className="Card" onClick={this.chooseRoute} >
                          <RouteList routes={this.state.routes} />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                          <h3>{this.state.sightTitle}</h3>
                          <SightList sights={this.state.currentSights} type="Sights" />
                        </div>
                      </Col>
                      <Col>
                        <Map route={this.state.route4map} />
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default App;
