import React, {useState, useEffect} from "react";
import DataBlock from "../DataBlock/DataBlock";
import { StyledDataSummaryWrapper } from "./DataSummary.styled";



const DataSummary = () => {

  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [ numberOfUsers, setNumberOfUsers] = useState(0);


  useEffect(() => {
    const fetchNumberOfProducts = async () => {
      try {
      const response = await  fetch('http://localhost:5000/api/products/get-all-products');
      const responseData = await response.json();
      
      setNumberOfProducts(responseData.total);
      }catch (err) {
        console.log(err);
      }
    }

    const fetchOrdersData = async () => {
      try {
      const response = await  fetch('http://localhost:5000/api/orders/get-all-orders');
      const responseData = await response.json();
      
      setNumberOfOrders(responseData.total);
      setRevenue(responseData.revenue);
      }catch (err) {
        console.log(err);
      }
    }

    const fetchUsersData = async () => {
      try {
      const response = await  fetch('http://localhost:5000/api/users/get-all-users');
      const responseData = await response.json();
      
      setNumberOfUsers(responseData.total);
      }catch (err) {
        console.log(err);
      }
    }
    fetchUsersData();
    fetchNumberOfProducts();
    fetchOrdersData();
  }, [])


  return (
    <StyledDataSummaryWrapper>
      <DataBlock
        title="Medicamente"
        text={numberOfProducts}
        linklabel="spre medicamente"
        link="medicamente"
        backgroundColor="#4BB543"
        color="#fff"
      />
      <DataBlock
        title="Comenzi"
        text={numberOfOrders}
        linklabel="spre comenzi"
        link="comenzi"
        backgroundColor="#FF8000"
        color="#fff"
      />

      <DataBlock
        title="Incasari"
        text={ revenue + " lei"}
        linklabel="spre comenzi"
        link="comenzi"
        backgroundColor="#0096FF"
        color="#fff"
      />
     
     <DataBlock
        title="Utilizatori"
        text={numberOfUsers}
        linklabel="spre utilizatori"
        link="utilizatori"
        backgroundColor="#D1000"
        color="#0096FF"
      />
    </StyledDataSummaryWrapper>
  );
};

export default DataSummary;
