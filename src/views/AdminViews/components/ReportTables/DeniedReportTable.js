import React, { useEffect, useState } from "react";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import reportApi from "../../../../api/reportApi";
import { Button, Col, Row } from "react-bootstrap";
import { CSmartTable } from "@coreui/react-pro";
import { Markup } from "interweave";
import moment from "moment";
import "moment/locale/vi";
import {
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { toast } from "react-toastify";
import categoryApi from "../../../../api/categoryApi";
import { ImgUpload, UploadContainer } from "../../Posts/CreatePost";
//
const DeniedReportTable = () => {
  const user_info = localStorage.getItem("user_info");
  const [reports, setReports] = useState();
  const [categoryList, setCategoryList] = useState([]);
  async function loadReports() {
    try {
      const param = { status: 4 };
      const response = await reportApi.getByStatus(param);
      const editedResponse = response.map((item) =>
        item.reportViews.length > 0 &&
        item.reportViews.filter((e) => e.userId === JSON.parse(user_info).email)
          .length > 0
          ? { ...item }
          : { ...item, _props: { color: "info", align: "middle" } }
      );
      setReports(
        editedResponse
          .sort((a, b) => new moment(a.createTime) - new moment(b.createTime))
          .reverse()
      );
    } catch (e) {
      toast.error(e.message);
    }
  }
  async function loadCategory() {
    try {
      const params = {};
      const response = await categoryApi.getAllSub(params);
      setCategoryList(response);
    } catch (e) {
      toast.error(e.message);
    }
  }
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTemp((prevTemp) => prevTemp + 1);
    }, 5000);
  }, []);
  useEffect(() => {
    loadReports();
    loadCategory();
  }, [temp]);
  //
  const [details, setDetails] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const columns = [
    {
      key: "index",
      label: "Th??? t???",
      filter: false,
      sorter: false,
      _style: { width: "5%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "location",
      label: "?????a ??i???m v??? vi???c",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },

    {
      key: "timeFraud",
      label: "Th???i ??i???m v??? vi???c",
      _style: { width: "10%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "description",
      label: "Chi ti???t",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "categoryId",
      label: "Danh m???c",
      _style: { width: "10%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "show_details",
      label: "Th??m",
      label: "Options",
      _style: { width: "5%" },
      filter: false,
      sorter: false,
      _props: { className: "fw-semibold" },
    },
  ];
  const [editedDescription, setEditedDescription] = useState(null);
  const getStatusById = (id) => {
    if (id === 1) {
      return "Kh??c";
    } else if (categoryList.find((c) => c.categoryId === id) === undefined) {
      return "??ang x??c ?????nh";
    } else {
      return categoryList.find((c) => c.categoryId === id).subCategory;
    }
  };
  const toggleDetails = async (id) => {
    setVisibleModal(!visibleModal);
    try {
      const param = { id: id };
      const param2 = { reportId: id, userId: JSON.parse(user_info).email };
      const response = await reportApi.find(param);
      await reportApi.reportViewUpdate(param2);
      const metaDescription = JSON.stringify(response.description)
        .replace(
          "<img",
          '<img style="width:55rem;height:30rem;padding-left:2rem;padding-right:2rem"'
        )
        .replace(
          "<iframe",
          '<iframe style="width:55rem;height:30rem;padding-left:2rem;padding-right:2rem"'
        )
        .replace(/\\/g, "");
      const description = metaDescription.substring(
        1,
        metaDescription.length - 1
      );
      setEditedDescription(description);
      setDetails(response);
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <>
      <Modal
        isOpen={visibleModal}
        toggle={() => (setVisibleModal(false), setDetails(null))}
        className=""
        size="lg"
        style={{ maxWidth: "1600px", width: "80%" }}
      >
        <ModalHeader
          className="bg-primary"
          toggle={() => (setVisibleModal(false), setDetails(null))}
        >
          Chi ti???t b??o c??o
        </ModalHeader>
        {details !== null ? (
          <ModalBody>
            <FormGroup row>
              <Col md="3">
                <Label for="location">
                  <b>?????a ??i???m:</b>{" "}
                </Label>
              </Col>
              <Col md="9">{details.location}</Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="timeFraud">
                  <b> Th???i gian v??? vi???c: </b>
                </Label>
              </Col>
              <Col md="9">{details.timeFraud}</Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="createTime">
                  <b>Th???i gian vi???t: </b>
                </Label>
              </Col>
              <Col md="9">{details.createTime}</Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="userId">
                  <b>Ng?????i g???i: </b>{" "}
                </Label>
              </Col>
              <Col md="9">
                {details.userId === null ? "Kh??ng c??" : details.userId}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="category">
                  {" "}
                  <b>Ph??n lo???i: </b>
                </Label>
              </Col>
              <Col md="9">
                {details.categoryId === 1
                  ? "Kh??c"
                  : categoryList.find(
                      (c) => c.categoryId === details.categoryId
                    ).subCategory}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="staffId">
                  <b>Ng?????i x??c nh???n: </b>
                </Label>
              </Col>
              <Col md="9">
                {details.staffId === null ? "Kh??ng c??" : details.staffId}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <Label for="description">
                  <b>Chi ti???t: </b>
                </Label>
              </Col>
              <Col md="12">
                <Markup
                  content={editedDescription}
                  allowAttributes
                  allowElements
                />
              </Col>
            </FormGroup>
            {/* File ????nh k??m */}
            <FormGroup row>
              <Col md="12">
                <Label for="description">
                  <b>???nh ????nh k??m: </b>
                </Label>
              </Col>
              {details.reportDetails.length > 0 &&
                (details.reportDetails.filter((img) => img.type === "Image")
                  .length > 0
                  ? details.reportDetails
                      .filter((img) => img.type === "Image")
                      .map((img) => (
                        <>
                          <Col md="2">
                            <FormGroup>
                              <UploadContainer>
                                {img.media.includes("http") ? (
                                  <ImgUpload preview={img.media} />
                                ) : (
                                  <>
                                    <ImgUpload />
                                  </>
                                )}
                              </UploadContainer>
                            </FormGroup>
                          </Col>
                        </>
                      ))
                  : "Kh??ng c?? ???nh ????nh k??m")}
            </FormGroup>
            <FormGroup row>
              <Col md="12">
                <Label for="description">
                  <b>Video ????nh k??m: </b>
                </Label>
              </Col>
              {details.reportDetails.length > 0 &&
                (details.reportDetails.filter((video) => video.type === "Video")
                  .length > 0
                  ? details.reportDetails
                      .filter((video) => video.type === "Video")
                      .map((video) => (
                        <Col md="12">
                          {video.media.includes("http") ? (
                            <label for="videos">
                              <video
                                width="400"
                                height="150"
                                controls
                                style={{
                                  height: "200px",
                                  objectFit: "contain",
                                }}
                                autoPlay
                                loop
                              >
                                <source src={video.media} />
                              </video>
                            </label>
                          ) : (
                            <span className="text-muted">Kh??ng c?? video</span>
                          )}
                        </Col>
                      ))
                  : "Kh??ng c?? video ????nh k??m")}
            </FormGroup>
          </ModalBody>
        ) : (
          <Row className="d-flex justify-content-center">
            <div class="spinner-border text-primary mb-5 mt-5" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </Row>
        )}
        {/* <ModalFooter></ModalFooter> */}
      </Modal>
      {reports !== null && (
        <CSmartTable
          noItemsLabel="Kh??ng c?? d??? li???u..."
          activePage={1}
          clickableRows
          columns={columns}
          columnFilter
          columnSorter
          items={reports}
          itemsPerPageSelect
          itemsPerPage={10}
          pagination
          scopedColumns={{
            index: (item) => {
              return JSON.stringify(item).includes("_props") ? (
                <td
                  className="py-2 font-weight-bold"
                  style={{ backgroundColor: "#e8e6e6" }}
                >
                  {item._id + 1}
                </td>
              ) : (
                <td className="py-2">{item._id + 1}</td>
              );
            },
            description: (item) => {
              return JSON.stringify(item).includes("_props") ? (
                <td
                  className="py font-weight-bold"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    maxWidth: "20rem",
                    backgroundColor: "#e8e6e6",
                  }}
                >
                  <Markup
                    content={item.description}
                    allowAttributes
                    allowElements
                    blockList={["img", "iframe"]}
                    noHtml={true}
                  />
                </td>
              ) : (
                <td
                  className="py"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    maxWidth: "20rem",
                  }}
                >
                  <Markup
                    content={item.description}
                    allowAttributes
                    allowElements
                    blockList={["img", "iframe"]}
                    noHtml={true}
                  />
                </td>
              );
            },
            timeFraud: (item) => {
              return JSON.stringify(item).includes("_props") ? (
                <td
                  className="py font-weight-bold"
                  style={{ backgroundColor: "#e8e6e6" }}
                >
                  {JSON.stringify(item.timeFraud)
                    .replace("T", " ")
                    .substring(1, JSON.stringify(item.timeFraud).length - 1)}
                </td>
              ) : (
                <td className="py">
                  {JSON.stringify(item.timeFraud)
                    .replace("T", " ")
                    .substring(1, JSON.stringify(item.timeFraud).length - 1)}
                </td>
              );
            },
            show_details: (item) => {
              return JSON.stringify(item).includes("_props") ? (
                <td
                  className="py-2 font-weight-bold"
                  style={{ backgroundColor: "#e8e6e6" }}
                >
                  <Button onClick={() => toggleDetails(item.reportId)}>
                    Chi ti???t
                  </Button>
                </td>
              ) : (
                <td className="py-2">
                  <Button onClick={() => toggleDetails(item.reportId)}>
                    Chi ti???t
                  </Button>
                </td>
              );
            },
            location: (item) => {
              return JSON.stringify(item).includes("_props") ? (
                <td
                  className="py-2 font-weight-bold"
                  style={{ backgroundColor: "#e8e6e6" }}
                >
                  {item.location}
                </td>
              ) : (
                <td className="py-2">{item.location}</td>
              );
            },
            categoryId: (item) => {
              return JSON.stringify(item).includes("_props") ? (
                <td
                  className="py-2 font-weight-bold"
                  style={{ backgroundColor: "#e8e6e6" }}
                >
                  {getStatusById(item.categoryId)}
                </td>
              ) : (
                <td className="py-2">{getStatusById(item.categoryId)}</td>
              );
            },
          }}
          tableProps={{
            hover: true,
            responsive: true,
          }}
        />
      )}
    </>
  );
};

export default DeniedReportTable;
