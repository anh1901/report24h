import { CBadge, CSmartTable } from "@coreui/react-pro";
import React, { Component } from "react";
import { Button, Row } from "reactstrap";
import Data from "./mock.json";
const getBadge = (status) => {
  switch (status) {
    case "Solved":
      return "success";
    case "Pending":
      return "warning";
    default:
      return "primary";
  }
};
class SendReport extends Component {
  render() {
    return (
      <div
        className="animated fadeIn"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Row>
          <input placeholder="Enter Report ID" />
          <Button>Find</Button>
        </Row>

        <CSmartTable
          activePage={3}
          clickableRows
          items={Data}
          itemsPerPage={5}
          pagination
          scopedColumns={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status ? "Solved" : "Pending")}>
                  {item.status ? "Solved" : "Pending"}
                </CBadge>
              </td>
            ),
          }}
          tableProps={{
            striped: true,
            hover: true,
          }}
        />
      </div>
    );
  }
}
export default SendReport;
