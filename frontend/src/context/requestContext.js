import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../common';

export const RequestData = createContext();

export const RequestDataProvider = ({ children }) => {
    const [request, setRequest] = useState([]);

    const fetchRequestData = async () => {
        try {
            const response = await axios.get(SummaryApi.getRequest.url);
            setRequest(response.data);
        } catch (error) {
            console.error("Failed to fetch request data", error);
        }
    };

    useEffect(() => {
        fetchRequestData();
    }, []);
    return (
        <RequestData.Provider value={{ request }}>
            {children}
        </RequestData.Provider>
    );
};
