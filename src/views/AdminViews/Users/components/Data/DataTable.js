import React, { useState } from "react";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import {
  CBadge,
  CButton,
  CCardBody,
  CCollapse,
  CSmartTable,
} from "@coreui/react-pro";

// const downloadUsers = useCallback(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((result) => {
//       setUsers(result);
//     });
// }, []);
// useEffect(() => {
//   downloadUsers();
// }, [downloadUsers]);
const DataTable = () => {
  const [details, setDetails] = useState([]);
  const columns = [
    {
      key: "name",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },
    "registered",
    { key: "role", filter: true, sorter: false, _style: { width: "20%" } },
    { key: "status", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "Options",
      _style: { width: "1%" },
      filter: false,
      sorter: false,
      _props: { className: "fw-semibold" },
    },
  ];
  const usersData = [
    {
      id: 0,
      name: "John Doe",
      registered: "2018/01/01",
      role: "Guest",
      status: "Pending",
    },
    {
      id: 1,
      name: "Samppa Nori",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
      _props: { color: "primary", align: "middle" },
    },
    {
      id: 2,
      name: "Estavan Lykos",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
      _cellProps: {
        all: { className: "fw-semibold" },
        name: { color: "info" },
      },
    },
    {
      id: 3,
      name: "Chetan Mohamed",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Derick Maximinus",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 5,
      name: "Friderik Dávid",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 6,
      name: "Yiorgos Avraamu",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 7,
      name: "Avram Tarasios",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
      _props: { color: "warning", align: "middle" },
    },
    {
      id: 8,
      name: "Quintin Ed",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Enéas Kwadwo",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 10,
      name: "Agapetus Tadeáš",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 11,
      name: "Carwyn Fachtna",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 12,
      name: "Nehemiah Tatius",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 13,
      name: "Ebbe Gemariah",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 14,
      name: "Eustorgios Amulius",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 15,
      name: "Leopold Gáspár",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 16,
      name: "Pompeius René",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 17,
      name: "Paĉjo Jadon",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 18,
      name: "Micheal Mercurius",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 19,
      name: "Ganesha Dubhghall",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 20,
      name: "Hiroto Šimun",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 21,
      name: "Vishnu Serghei",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 22,
      name: "Zbyněk Phoibos",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 23,
      name: "Aulus Agmundr",
      registered: "2018/01/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 42,
      name: "Ford Prefect",
      registered: "2001/05/25",
      role: "Alien",
      status: "Don't panic!",
    },
  ];
  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  return (
    <CSmartTable
      activePage={3}
      cleaner
      clickableRows
      columns={columns}
      columnFilter
      columnSorter
      items={usersData}
      itemsPerPageSelect
      itemsPerPage={5}
      pagination
      scopedColumns={{
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item) => {
          return (
            <td className="py-2">
              <CButton
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(item._id);
                }}
              >
                {details.includes(item._id) ? "Hide" : "Show"}
              </CButton>
            </td>
          );
        },
        details: (item) => {
          return (
            <CCollapse visible={details.includes(item._id)}>
              <CCardBody>
                UserID: {item.id}
                <h4>{item.username}</h4>
                <p className="text-muted">User since: {item.registered}</p>
                <CButton size="sm" color="info">
                  Update
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          );
        },
      }}
      tableFilter
      tableProps={{
        striped: true,
        hover: true,
      }}
    />
  );
};

export default DataTable;
