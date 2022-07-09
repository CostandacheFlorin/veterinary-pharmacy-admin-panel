import React, { useState, useEffect } from "react";
import Text from "../../components/UIElements/Typography/Text";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { StyledChartsLayout, StyledChartsContainer } from "./Charts.styled";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  LineElement,
  Filler,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import { useHttpClient } from "../../hooks/http-hook";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const options = ["Alege tipul graficului", "PieChart", "LineChart"];
const Charts = () => {
  const [value, setValue] = useState(options[0]);

  const [boughtProducts, setBoughtProducts] = useState([]);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showPieChart, setShowPieChart] = useState(true);
  const [showLineChart, setShowLineChart] = useState(true);
  const [linechartData, setLinechartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Numarul de vanzari pe luna",
        data: [11, 15, 10, 20, 33, 11, 16, 44, 5, 11, 50, 15],
        backgroundColor: "yellow",
        borderColor: "red",
        tension: 0.4,
        pointStyle: 'star',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff'
      },
    ],
  });

  let data = {
    labels: ["keys", "asd", "asda", "asdasd", "asdsadas"],
    datasets: [
      {
        label: "Numarul de achizitii pentru produse",
        data: [1, 2, 3, 4, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const [graphData, setGraphData] = useState(data);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/orders/get-all-orders"
        );
        const ordersArray = responseData.orders.map((order) =>
          order.products.map((a) => a.name)
        );
        const concatArray = [].concat.apply([], ordersArray);

        let values = [];
        let keys = [];

        let mapWithOccurences = concatArray
          .reduce((a, c) => {
            if (a.has(c)) a.set(c, a.get(c) + 1);
            else a.set(c, 1);
            return a;
          }, new Map())
          .forEach((value, key, map) => {
            keys.push(key);
            values.push(value);
          });

        function random_rgba() {
          var o = Math.round,
            r = Math.random,
            s = 255;
          return (
            "rgba(" +
            o(r() * s) +
            "," +
            o(r() * s) +
            "," +
            o(r() * s) +
            "," +
            "1" +
            ")"
          );
        }
        const newBorders = [];

        values.forEach((element) => {
          newBorders.push(random_rgba());
        });
        console.log(newBorders);

        data.labels = keys;
        data.datasets.data = values;
        data.datasets.backgroundColor = newBorders;
        data.datasets.borderColor = newBorders;
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    if (value === "PieChart") {
      setShowPieChart(true);
    } else {
      setShowPieChart(false);
    }

    if (value === "LineChart") {
      setShowLineChart(true);
    } else {
      setShowLineChart(false);
    }
  }, [showPieChart, showLineChart, value]);

  return (
    <StyledChartsLayout>
      <StyledChartsContainer>
        <Text type="subtitle" margin="2rem 0" color="#000">
          Alege tipul graficului
        </Text>
        <Autocomplete
          disablePortal
          id="combo-box-charts"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Tip grafic" />}
        />
      </StyledChartsContainer>
      <StyledChartsContainer>
        {" "}
        {showPieChart && (
          <Text type="subtitle" margin="1rem 0">
            Numarul de vanzari pentru fiecare produs din toate comenzile
            efectuate
          </Text>
        )}
        {showPieChart && (
          <Pie
            title="Numarul de vanzari pentru fiecare produs"
            data={graphData}
          />
        )}{" "}
        {showLineChart && <Line data={linechartData} />}
      </StyledChartsContainer>
    </StyledChartsLayout>
  );
};

export default Charts;
