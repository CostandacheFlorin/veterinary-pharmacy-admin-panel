import React, { useState } from "react";
import ProductFields from "../../../components/ProductFields/ProductFields";
import { StyledAddProductContainer } from "./AddProduct.styled";
import Text from "../../../components/UIElements/Typography/Text";
import { StyledMediumButton } from "../../../components/UIElements/Buttons/Button.styled";
import DynamicFields from "../../../components/UIElements/DynamicFields/DynamicFields";
import { useHttpClient } from "../../../hooks/http-hook";
import ImageUpload from "../../../components/UIElements/ImageUpload/ImageUpload";
const AddProduct = () => {
  const [name, setName] = useState("ceva");
  const [description, setDescription] = useState("descriere");
  const [price, setPrice] = useState(6);
  const [usage, setUsage] = useState("cu lipie");
  const [itemList, setItemList] = useState([
    { name: "asdad", quantity: "500g" },
  ]);
  const [speciesList, setSpeciesList] = useState([
    { specie: "caine" },
    { specie: "pisica" },
  ]);
  const [image, setImage] = useState("");

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
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

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("usage", usage);
      formData.append("ingredients", itemList);
      formData.append("species", speciesList);
      formData.append("image", image);
      const newProduct = {
        name: name,
        description: description,
        price: price,
        usage: usage,
        ingredients: itemList,
        species: speciesList,
        image: image,
      };
      console.log(JSON.stringify(speciesList));

      console.log(newProduct);

      for (var p of formData) {
        let name = p[0];
        let value = p[1];

        console.log(name, value);
      }

      await sendRequest(
        "http://localhost:5000/api/products/add-product",
        "POST",
        formData
      );

      console.log("a mers vere");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <StyledAddProductContainer onSubmit={submitHandler}>
        <Text type="subtitle" margin="2rem 0" align="center">
          Completeaza campurile pentru a adauga un medicament nou!
        </Text>

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
        <ImageUpload image={image} sendImage={setImage} />
        <StyledMediumButton>Adauga produs</StyledMediumButton>
      </StyledAddProductContainer>
    </>
  );
};

export default AddProduct;
