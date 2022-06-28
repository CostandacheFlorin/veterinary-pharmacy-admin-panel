import React from "react";
import { StyledDashboardWrapper } from "./Dashboard.styled";
import Sidebar from "../../components/UIElements/Sidebar/Sidebar";
import DataSummary from "../../components/UIElements/DataSummary/DataSummary";
const Dashboard = () => {
  return (
    <StyledDashboardWrapper>
      <Sidebar />
      <DataSummary />
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
