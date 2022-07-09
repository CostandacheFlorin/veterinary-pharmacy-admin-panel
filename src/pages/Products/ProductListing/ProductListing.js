import React, { useState } from "react";

import { Table, Modal, Button } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useHttpClient } from "../../../hooks/http-hook";
import { StyledMediumButton } from "../../../components/UIElements/Buttons/Button.styled";
import { StyledActionsArea } from "./ProductListing.styled";
import DynamicFields from "../../../components/UIElements/DynamicFields/DynamicFields";
import ProductFields from "../../../components/ProductFields/ProductFields";
import { useHistory } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ErrorModal from "../../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../../components/UIElements/Loading/LoadingSpinner";
const ProductListing = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [usage, setUsage] = useState("");
  const [itemList, setItemList] = useState([{ name: "", quantity: "" }]);
  const [speciesList, setSpeciesList] = useState([{ specie: "" }]);

  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingMed, setEditingMed] = useState({});
  const [dataSource, setDataSource] = useState();

  const history = useHistory();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const fetchMeds = async () => {
    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/products/get-all-products"
      );

      responseData.products.forEach((object) => {
        delete object["id"];
        delete object["_id"];
        delete object["category"];
        delete object["image"];
        delete object["__v"];

        let specii = object.species.map((a) => a.specie);

        object.species = specii.toString();

        let ingrediente = object.ingredients.map(
          (a) => a.name + " " + a.quantity
        );
        object.ingredients = ingrediente.toString();
      });

 

      setDataSource(responseData.products);
    } catch (err) {}
  };

  useEffect(() => {
    fetchMeds();
  }, [sendRequest]);

  const onAddHandler = (record) => {
    setIsAdding(true);
  };

  const onEditHandler = (record) => {
    setIsEditing(true);
    setName(record.name);
    setDescription(record.description);
    setPrice(record.price);
    setUsage(record.usage);
  };

  const editProduct = async () => {
      const editedProduct = {
      name,
      price,
      description,
      usage,
      ingredients: itemList,
      species: speciesList,
    };
    console.log(editedProduct);
    const responseData = await sendRequest(
      `http://localhost:5000/api/products/edit-product/${name}`,
      "PATCH",
      JSON.stringify(editedProduct),
      {
        "Content-Type": "application/json",
      }
    );

    fetchMeds();
  };

  console.log(itemList);
  console.log(speciesList);

  const onDeleteHandler = (record) => {
    Modal.confirm({
      title: "Esti sigur ca vrei sa stergi medicamentul?",
      onOk: async () => {
        console.log(name);
        try {
          await sendRequest(
            `http://localhost:5000/api/products/delete-product/${record.name}`,
            "DELETE"
          );
          fetchMeds();
        } catch (err) {
          console.log(err);
        }
      },
      okText: "Confirma",
      okType: "danger",
      cancelText: "Anuleaza",
    });
  };

  const columns = [
    {
      key: "1",
      title: "Denumire",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Descriere",
      dataIndex: "description",
    },
    {
      key: "3",
      title: "Pret",
      dataIndex: "price",
    },
    {
      key: "4",
      title: "Mod de utilizare",
      dataIndex: "usage",
    },
    {
      key: "5",
      title: "Specii",
      dataIndex: "species",
    },
    {
      key: "6",
      title: "Ingrediente",
      dataIndex: "ingredients",
    },
    {
      key: "7",
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

  const changeSpeciesHandler = (value) => {
    setSpeciesList(value);
  };

  const changeNameHandler = (value) => {
    setName(value);
  };
  const changeDescriptionHandler = (value) => {
    setDescription(value);
  };
  const changePriceHandler = (value) => {
    setPrice(value);
  };
  const changeUsageHandler = (value) => {
    setUsage(value);
  };

  return (
    <>
    {isLoading && <LoadingSpinner size={150} />}
      <div style={{ width: "100%" }}>
        <StyledMediumButton
          onClick={onAddHandler}
          style={{ margin: "1rem auto", display: "block" }}
        >
          Adauga medicament
        </StyledMediumButton>
      </div>

      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
      width={"80%"}
        title={"Editeaza medicament"}
        visible={isEditing}
        okText="Salveaza"
        cancelText="Anuleaza"
        onCancel={() => {
          setIsEditing(false);
        }}
        onOk={() => {
          editProduct();
          setIsEditing(false);
        }}
      >
        <ProductFields
          initialName={name}
          initialDescription={description}
          initialUsage={usage}
          initialPrice={price}
          onNameChange={changeNameHandler}
          onDescriptionChange={changeDescriptionHandler}
          onPriceChange={changePriceHandler}
          onUsageChange={changeUsageHandler}
        />

        <DynamicFields
          name={"ingredient"}
          listName={"ingrediente"}
          itemArray={itemList}
          setValues={setItemList}
        />
        <DynamicFields
          name={"specie"}
          listName={"specii"}
          itemArray={speciesList}
          setValues={setSpeciesList}
        />

      </Modal>

      <Modal
        title={"Adauga medicament"}
        visible={isAdding}
        width="70%"
        style={{ top: "10px" }}
        onCancel={() => {
          setIsAdding(false);
        }}
        footer={
          <Button
            onClick={() => {
              setIsAdding(false);
            }}
          >
            Anuleaza
          </Button>
        }
      >
        <AddProduct setIsAdding={setIsAdding} fetchMeds={fetchMeds} />
      </Modal>
    </>
  );
};

export default ProductListing;
