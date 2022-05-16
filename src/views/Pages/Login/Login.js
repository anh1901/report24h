import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <a href="/">
                    <icon className="fa fa-angle-left" />
                    &nbsp;Trang chủ
                  </a>

                  <CardBody>
                    <h1>Đăng nhập</h1>
                    <p className="text-muted">
                      Đăng nhập vào tài khoản của bạn
                    </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Tên tài khoản" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Mật khẩu" />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">
                          Đăng nhập
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Quên mật khẩu
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: 44 + "%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Đăng kí ngay</h2>
                      <p>
                        Tham gia ngay để được thông báo về các vụ lừa đảo tinh
                        vi nhất. Báo cáo những trường hợp xung quanh bạn cho
                        chúng tôi để giúp xã hội tốt đẹp hơn.
                      </p>
                      <Button
                        color="primary"
                        className="mt-3"
                        active
                        onClick={() => (window.location.href = "/register")}
                      >
                        Register Now!
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
