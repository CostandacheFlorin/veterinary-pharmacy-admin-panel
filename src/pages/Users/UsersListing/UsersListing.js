import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingSpinner from "../../../components/UIElements/Loading/LoadingSpinner";
import { StyledActionsArea } from "../../Products/ProductListing/ProductListing.styled";

import { useHttpClient } from "../../../hooks/http-hook";
const UsersListing = () => {
  const [dataSource, setDataSource] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users/get-all-users"
        );
        const usersArray = responseData.users.map((user) => ({
          userId: user.id,
          username: user.username,
          email: user.email
        }));

        setDataSource(usersArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  const onEditHandler = (record) => {};

  const onDeleteHandler = (record) => {
    Modal.confirm({
        title: "Esti sigur ca vrei sa stergi utilizatorul?",
        onOk: async () => {
          
          console.log("s-a sters utilizatorul");
        },
        okText: "Confirma",
        okType: "danger",
        cancelText: "Anuleaza",
      });
  };

  const columns = [
    {
      key: "1",
      title: "ID-ul utilizatorului",
      dataIndex: "userId",
    },{
        key: "2",
        title: "Numele de utilizator",
        dataIndex: "username",
      },{
        key: "3",
        title: "Adresa de email",
        dataIndex: "email",
      },
    
    {
      key: "9",
      title: "Actiuni",
      render: (record) => {
        return (
          <>
            <StyledActionsArea>
              <EditIcon
                onClick={() => {
                  onEditHandler(record);
                }}
                style={{ color: "#000" }}
              />
              <DeleteIcon
                onClick={() => {
                  onDeleteHandler(record);
                }}
                style={{ color: "red" }}
              />
            </StyledActionsArea>
          </>
        );
      },
    },
  ];

  return <>{isLoading && <LoadingSpinner size={150} />}
    <Table columns={columns} dataSource={dataSource} /></>;
};

export default UsersListing;
