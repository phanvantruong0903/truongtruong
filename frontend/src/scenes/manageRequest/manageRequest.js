import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../../common";

const Request = () => {
    const [request, setRequest] = useState([]);
    
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

    const handleStatus = async (id) => {
        try {
            const updatedRequest = request.map((req) =>
                req._id === id ? { ...req, status: req.status + 1 } : req
            );
            const updatedReq = updatedRequest.find((req) => req._id === id);
            setRequest(updatedRequest);
            await axios.put(SummaryApi.updateStatus.url, { id, status: updatedReq.status });
        } catch (error) {
            console.error("Error updating request status:", error);
        }
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "_id", headerName: "ID" },
        {
            field: "firstName",
            headerName: "First Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "lastName",
            headerName: "Last Name",
            flex: 1,
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
            headerName: "Expired Date",
            flex: 1,
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
        },
        {
            headerName: "Action",
            flex: 1,
            renderCell: (params) => (
                <button
                    onClick={() => handleStatus(params.row._id)}
                >
                    Increment Status
                </button>
            ),
        }
    ];

    return (
        <Box m="20px">
            <Header title="Request" subtitle="Managing Request" />
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
                    getRowId={(row) => row._id}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Request;
