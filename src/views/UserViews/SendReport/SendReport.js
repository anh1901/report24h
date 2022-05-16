import React, { Component } from "react";
import ReactQuill from "react-quill";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Col,
  Input,
  Form,
  Row,
  Button,
  FormText,
} from "reactstrap";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "quill/dist/quill.snow.css";
//react-select
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { CFormInput } from "@coreui/react-pro";

const animatedComponents = makeAnimated();
//testing
var Filter = require("bad-words-plus");
var filter = new Filter({ regex: /[\p{L}-]/u });
//multiple select option mock data
const options = [
  { value: "1", label: "Đề nghị làm nhà phân phối" },
  { value: "2", label: "Mạo danh các nhà mạng, cơ quan nhà nước" },
  { value: "3", label: "Hack tài khoản mạng xã hội để lừa đảo" },
  { value: "4", label: "Ứng dụng lừa đảo" },
  { value: "5", label: "Link clip, hình ảnh nóng" },
  { value: "6", label: "Tặng quà từ nước ngoài" },
  { value: "7", label: "Thông báo của ngân hàng" },
  { value: "8", label: "Khác..." },
];

const initialText = "Viết chi tiết ở đây";
class SendReport extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
    };
    //
    this.state = { text: initialText }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ["clean"], // remove formatting button
      ],
    };
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => {
      return { fadeIn: !prevState };
    });
  }
  //multiple select

  handleInputChange = (inputValue, actionMeta) => {
    console.group("Input Changed");
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  render() {
    return (
      <Card style={{ height: "auto" }}>
        <CardHeader>
          Chi tiết báo cáo
          <div className="card-header-actions">
            <small className="text-muted">Xin hãy viết đúng sự việc</small>
          </div>
        </CardHeader>
        <CardBody>
          <Form
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <FormGroup row>
              <Col md="2">
                <Label htmlFor="name">Tên:</Label>
              </Col>
              <Col>
                <Input
                  type="text"
                  id="name"
                  placeholder="Nhập tên nếu muốn..."
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="2">
                <Label htmlFor="selectSm">
                  Trường hợp bạn gặp<i style={{ color: "red" }}>*</i>
                </Label>
              </Col>
              <Col>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="2">
                <Label>Thông tin đối tượng:</Label>
              </Col>
              <Col>
                <Input
                  type="text"
                  id="name"
                  placeholder="Nhập thông tin đối tượng..."
                />
              </Col>
            </FormGroup>
            {/* File Upload */}
            <FormGroup row>
              <Col md="2">
                <Label for="file">File đính kèm</Label>
              </Col>
              <Col>
                <Input id="file" name="file" type="file" />
                <FormText>
                  Lưu ý:{" "}
                  <i>Dung lượng hình ảnh không quá 5MB, video không quá 50MB</i>
                </FormText>
              </Col>
            </FormGroup>
            {/* Detail */}
            <FormGroup>
              <ReactQuill
                value={this.state.text}
                modules={this.modules}
                style={{
                  height: "100px",
                  marginBottom:
                    window.innerWidth < 505
                      ? "7rem"
                      : 505 < window.innerWidth && window.innerWidth < 650
                      ? "6rem"
                      : 650 < window.innerWidth && window.innerWidth < 1250
                      ? "4rem"
                      : "2rem",
                }}
              />
            </FormGroup>
            {/* Chấp nhập điều khoản */}
            <FormGroup check inline style={{ paddingTop: "1rem" }}>
              <Input type="checkbox" />
              <Label check>
                <i style={{ color: "red" }}>* </i>
                Tôi hoàn toàn chịu trách nhiệm về thông tin báo báo theo{" "}
                <a href="#">điều khoản sử dụng</a>
              </Label>
            </FormGroup>
            <FormGroup inline>
              <Button onClick={() => {}} color="primary">
                <b>Gửi báo cáo</b>
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default SendReport;
