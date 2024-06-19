import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../../common";
import { array } from "yup";

const data = [
    { id: 1, name: "trúdjfna" },
    { id: 2, name: "sdfaf0" }
]

const Request = () => {
    const [request, setRequest] = useState([])
    useEffect(() => {
        const fetchRequestData = async () => {
            try {
                const response = await axios.get(SummaryApi.getRequest.url);

                if (Array.isArray(response.data)) {
                    setRequest(response.data);
                } else {
                    setRequest(Object.values(response.data));
                }
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchRequestData();
    }, []);


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "_id", headerName: "_ID" },
        {
            field: "firstName",
            headerName: "First Name:",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "lastName",
            headerName: "Last Name",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "contact",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "date",
            headerName: "Date đưa mãu vật",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : access === "manager"
                                    ? colors.greenAccent[700]
                                    : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={request}
                    getRowId={(row) => row._id || Math.random().toString()}
                    columns={columns}
                />
                {/* // <DataGrid checkboxSelection rows={request} columns={columns} /> */}
            </Box>
        </Box>

    );
};

export default Request;
