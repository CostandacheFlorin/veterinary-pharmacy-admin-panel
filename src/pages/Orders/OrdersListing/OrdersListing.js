import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingSpinner from "../../../components/UIElements/Loading/LoadingSpinner";
import { StyledActionsArea } from "../../Products/ProductListing/ProductListing.styled";

import { useHttpClient } from "../../../hooks/http-hook";
const OrdersListing = () => {
  const [dataSource, setDataSource] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/orders/get-all-orders"
        );
        console.log(responseData.orders);
        let result = responseData.orders[0].products.map((a) => a.name);
        console.log(result);
        const ordersArray = responseData.orders.map((order) => ({
          userId: order.userId,
          name: order.lastname + " " + order.firstname,
          productsNumber: order.numberOfItems,
          status: order.status,
          date: order.date,
          address:
            order.county +
            " " +
            order.city +
            " " +
            order.address +
            " " +
            order.zipcode,
          products: order.products.map((product) => product.name).toString(),
        }));

        setDataSource(ordersArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  }, []);

  const onEditHandler = (record) => {};

  const onDeleteHandler = (record) => {
    Modal.confirm({
        title: "Esti sigur ca vrei sa stergi comanda?",
        onOk: async () => {
          
          console.log("s-a sters comanda");
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
    },
    {
      key: "2",
      title: "Numele complet",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Adresa de livrare",
      dataIndex: "address",
    },
    {
      key: "4",
      title: "Produse",
      dataIndex: "products",
    },
    {
      key: "5",
      title: "Numarul de produse",
      dataIndex: "productsNumber",
    },
    {
      key: "6",
      title: "Data",
      dataIndex: "date",
    },
    {
      key: "7",
      title: "Status",
      dataIndex: "status",
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

export default OrdersListing;
