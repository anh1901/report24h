import React, { Component } from "react";
import { Card, Col, Row } from "reactstrap";
import FeaturedPosts from "./components/FeaturedPosts";
import TrendingHashTag from "./components/TrendingHashTags";
import TrendingPosts from "./components/TrendingPosts";
import WeatherWidget from "./components/WeatherWidget";

class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="9" lg="9">
            <Card className="text-white bg-info">
              <TrendingHashTag />
            </Card>
          </Col>
          <Col xs="12" sm="3" lg="3">
            <Card className="text-white bg-primary">
              <WeatherWidget />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="3" lg="3">
            <Card style={{ height: "25rem" }} className="text-white bg-success">
              <TrendingPosts />
            </Card>
          </Col>
          <Col xs="12" sm="9" lg="9">
            <Card
              style={{ height: "25rem" }}
              className="text-white bg-secondary"
            >
              <FeaturedPosts />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Home;
