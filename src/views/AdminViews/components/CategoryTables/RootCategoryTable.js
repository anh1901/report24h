import React, { useEffect, useState } from "react";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import { CSmartTable } from "@coreui/react-pro";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import categoryApi from "../../../../api/categoryApi";
import { toast } from "react-toastify";
import { setInterval } from "core-js";
//
const RootCategoryTable = () => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [categories, setCategories] = useState([]);
  const [deletedCategory, setDeletedCategory] = useState("");
  const [updateType, setUpdateType] = useState("");
  const [isTypeUpdate, setIsTypeUpdate] = useState(false);
  const [temp, setTemp] = useState(0);
  const toggle = () => {
    setModal(!modal);
  };
  const handleTypeChange = (e) => {
    setUpdateType(e.target.value);
  };
  async function updateCategory(id, type) {
    setIsLoading2(true);
    try {
      const param = {
        id: id,
        rootType: updateType === null ? type : updateType,
      };
      const response = await categoryApi.updateRoot(param);
      if (response.statusCode === 200) {
        setIsLoading2(false);
        setVisibleModal(false);
        setUpdateType("");
      }
    } catch (e) {
      toast.error(e.message);
    }
  }
  async function loadCategories() {
    try {
      const param = {};
      const response = await categoryApi.getAllRoot(param);
      setCategories(response);
    } catch (e) {
      toast.error(e.message);
    }
  }
  async function deleteCategory(id) {
    setIsLoading(true);
    try {
      const params = { id: id };
      const response = await categoryApi.deleteRoot(params);
      if (response.statusCode === 200) {
        setIsLoading(false);
        setModal(!modal);
        setDeletedCategory("");
      }
    } catch (e) {
      toast.error(e.message);
    }
  }
  useEffect(() => {
    setInterval(() => {
      setTemp((prevTemp) => prevTemp + 1);
    }, 5000);
  }, []);
  useEffect(() => {
    loadCategories();
  }, [temp]);
  //
  const [details, setDetails] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const columns = [
    {
      key: "rootCategoryId",
      label: "ID",
      _style: { width: "5%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "type",
      label: "T??n danh m???c",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "show_details",
      label: "Options",
      _style: { width: "5%" },
      filter: false,
      sorter: false,
      _props: { className: "fw-semibold" },
    },
  ];

  const toggleDetails = async (id) => {
    setVisibleModal(!visibleModal);
    try {
      const param = { rootCategoryId: id };
      const response = await categoryApi.getByIdRoot(param);
      setDetails(response);
    } catch (e) {
      toast.error(e.message);
    }
  };
  useEffect(() => {});
  return (
    <>
      <Modal
        isOpen={modal}
        toggle={() => toggle()}
        className=""
        size="lg"
        style={{ maxWidth: "800px", width: "80%", paddingTop: "15rem" }}
      >
        <ModalHeader className="bg-danger" toggle={() => toggle()}>
          B???n ch???c kh??ng?
        </ModalHeader>
        <ModalBody>X??a danh m???c ID: {deletedCategory} n??y?</ModalBody>
        <ModalFooter>
          {isLoading ? (
            <Button color="primary">
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              ??ang X??a
            </Button>
          ) : (
            <Button
              color="primary"
              onClick={() => deleteCategory(deletedCategory)}
            >
              X??a
            </Button>
          )}
          <Button color="secondary" onClick={() => toggle()}>
            H???y
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        isOpen={visibleModal}
        toggle={() => (
          setVisibleModal(false), setDetails(null), setIsTypeUpdate(false)
        )}
        className=""
        size="lg"
        style={{ maxWidth: "800px", width: "80%" }}
      >
        <ModalHeader
          className="bg-primary"
          toggle={() => (setVisibleModal(false), setDetails(null))}
        >
          Chi ti???t danh m???c g???c
        </ModalHeader>
        {details !== null ? (
          <>
            <ModalBody>
              <FormGroup row>
                <Col md="3">
                  <Label for="location">
                    <b>ID: </b>{" "}
                  </Label>
                </Col>
                <Col md="9">{details.rootCategoryId}</Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label for="location">
                    <b>T??n danh m???c: </b>
                  </Label>
                </Col>
                <Col md="8">
                  {isTypeUpdate ? (
                    <Input
                      type="text"
                      name="type"
                      id="type"
                      placeholder="T??n danh m???c g???c m???i"
                      onChange={(e) => handleTypeChange(e)}
                    ></Input>
                  ) : (
                    <Input
                      type="text"
                      name="type"
                      id="type"
                      disabled
                      value={details.type}
                    ></Input>
                  )}
                </Col>
                <Col md="1">
                  <Button onClick={() => setIsTypeUpdate(!isTypeUpdate)}>
                    <i class="fa fa-edit"></i>
                  </Button>
                </Col>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              {isLoading2 ? (
                <Button variant="primary" size="sm">
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  ??ang C???p nh???t
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    updateCategory(details.rootCategoryId, details.type)
                  }
                >
                  C???p nh???t
                </Button>
              )}
            </ModalFooter>
          </>
        ) : (
          <Row className="d-flex justify-content-center">
            <div class="spinner-border text-primary mb-5 mt-5" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </Row>
        )}
      </Modal>
      {categories !== null && (
        <CSmartTable
          noItemsLabel="Kh??ng c?? d??? li???u..."
          draggable
          activePage={1}
          cleaner
          columns={columns}
          columnFilter
          columnSorter
          items={categories}
          itemsPerPageSelect
          itemsPerPage={10}
          pagination
          scopedColumns={{
            rootCategoryId: (item) => {
              return <td className="py-2">{item._id + 1}</td>;
            },
            show_details: (item) => {
              return (
                <td className="">
                  <Row>
                    <Button onClick={() => toggleDetails(item.rootCategoryId)}>
                      Chi ti???t
                    </Button>{" "}
                    <Button
                      onClick={() => (
                        toggle(), setDeletedCategory(item.rootCategoryId)
                      )}
                      color="danger"
                      className="ml-1"
                    >
                      <icon className="fa fa-trash" />
                    </Button>
                  </Row>
                </td>
              );
            },
          }}
          tableFilter
          // tableProps={{
          //   hover: true,
          // }}
        />
      )}
    </>
  );
};

export default RootCategoryTable;
