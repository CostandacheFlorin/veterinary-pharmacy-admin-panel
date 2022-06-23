import React, { useEffect, useState } from "react";
import ProductFields from "../../../components/ProductFields/ProductFields";
import { StyledEditProductContainer } from "./EditProduct.styled";
import Text from "../../../components/UIElements/Typography/Text";
import { StyledMediumButton } from "../../../components/UIElements/Buttons/Button.styled";
import DynamicFields from "../../../components/UIElements/DynamicFields/DynamicFields";
import { useHttpClient } from "../../../hooks/http-hook";
import ImageUpload from "../../../components/UIElements/ImageUpload/ImageUpload";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
const EditProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [usage, setUsage] = useState("");
  const [itemList, setItemList] = useState([{ name: "", quantity: "" }]);
  const [speciesList, setSpeciesList] = useState([{ specie: "" }]);
  const [image, setImage] = useState("");
  const [medNames, setMedNames] = useState([]);

  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchMedNames = async () => {
      const responseData = await sendRequest(
        "http://localhost:5000/api/products/get-all-products-names"
      );

      function selectName(product) {
        const { name } = product;
        return { name };
      }

      const names = responseData.products.map(selectName);
      let result = names.map((a) => a.name);

      setMedNames(result);
    };

    fetchMedNames();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const responseData = await sendRequest(
        `http://localhost:5000/api/products/get-product-by-name/${value}`
      );
    //   setLoadedMed(responseData.product);



    
     
    responseData.product.ingredients.forEach(object => {
      delete object['id'];
      delete object['_id'];
    });


    responseData.product.species.forEach(object => {
      delete object['id'];
      delete object['_id'];
    });
      console.log(responseData.product);
      setName(responseData.product.name);
      setDescription(responseData.product.description);
      setPrice(responseData.product.price);
      setUsage(responseData.product.usage);
      console.log(responseData.product.ingredients);
    //   const ingrediente = [{name: "asd", quantity: "300kg" }];
      setItemList(responseData.product.ingredients);
      setSpeciesList(responseData.product.species);

    //   setItemList(itemList => [...itemList,ingrediente] );
      console.log(responseData.product.species);
     
      setImage(responseData.product.image);

     
      
    };
    if (value) {
      fetchProduct();
    }
  }, [value]);




  const changeSpeciesHandler = (value) => {
    setSpeciesList(value);
  }

  console.log(itemList);
  console.log(speciesList);


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

    console.log(itemList);
    console.log(speciesList);
  };

  return (
    <>
      <StyledEditProductContainer onSubmit={submitHandler}>
        <Text type="subtitle" margin="2rem 0" align="center">
          Completeaza campurile pentru a edita un medicament !
        </Text>
  
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={medNames}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Medicament"
              type="search"
              variant="standard"
              sx={{ marginBottom: "4rem" }}
            />
          )}
        />

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
        <StyledMediumButton>Editeaza produs</StyledMediumButton>
      </StyledEditProductContainer>
    </>
  );
};

export default EditProduct;
