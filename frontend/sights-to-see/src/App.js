import React from 'react';
import './App.css';
import RouteList from './listRoutes';
import SightList from './listSights';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      locations: [],
      sights: [],
      route4map : 'https://www.mapquest.com/embed/my-maps/2fd83602-cf58-4a04-93a9-e7f7f2ef99bb?center=44.70575417971902,-110.55953979492188&zoom=9&maptype=map'
    }
    this.fetchRoutes = this.fetchRoutes.bind(this)
    this.fetchLocations = this.fetchLocations.bind(this)
    this.fetchSights = this.fetchSights.bind(this)
    this.chooseRoute = this.chooseRoute.bind(this)
  }

  chooseRoute(e) {
    console.log("in chooseRoute function")
    console.log(e.target.id);
    if (e.target.id === '1') {
      this.setState({ route4map : this.state.routes[0].maplink })
    } else if (e.target.id === '2') {
      this.setState({ route4map: this.state.routes[1].maplink })
    } else if (e.target.id === '3') {
      this.setState({ route4map: this.state.routes[2].maplink })
    } else {
      this.setState({ route4map: 'https://www.mapquest.com/embed/my-maps/2fd83602-cf58-4a04-93a9-e7f7f2ef99bb?center=44.70575417971902,-110.55953979492188&zoom=9&maptype=map' })
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
      .then((json) => { this.setState({ sights: json }) })
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

        <Accordion defaultActiveKey="2">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Routes
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <div onClick={this.chooseRoute} >
                        <RouteList routes={this.state.routes}/>
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
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Sights
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <SightList sights={this.state.sights} type="Sights" />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default App;
