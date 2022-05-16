import React, { Component } from "react";
import { Button } from "reactstrap";
import DataTable from "./components/Data/DataTable";

class Users extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Button onClick={() => {}} color="primary">
          <i className="icon-plus"> </i>
          <b> Create User</b>
        </Button>
        <DataTable />
      </div>
    );
  }
}

export default Users;
