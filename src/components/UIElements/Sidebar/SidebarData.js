import React from 'react';
import MedicationIcon from '@mui/icons-material/Medication';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
export const SidebarData = [
    {
        title: "Medicamente",
        path: "/medicamente",
        icon: <MedicationIcon />
    },
    {
        title: "Utilizatori",
        path: "/utilizatori",
        icon: <AccountCircleIcon />
    },
    {
        title: "Comenzi",
        path: "/comenzi",
        icon: <PointOfSaleIcon />
    },
    {
        title: "Gestionare date",
        path: "/date",
        icon: <DataThresholdingIcon />
    },
]