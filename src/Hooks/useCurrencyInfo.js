import { useEffect, useState } from "react";

// Mock data object containing currency rates
const mockData = {
    usd: {
        inr: 83.15,
        eur: 0.92,
        gbp: 0.79,
    },
    eur: {
        usd: 1.19,
        inr: 88.43,
        gbp: 0.85,
    },
    gbp: {
        usd: 1.37,
        eur: 1.17,
        inr: 102.21,
    },
    inr: {
        usd: 0.013,
        eur: 0.011,
        gbp: 0.0098,
    },
};

function useCurrencyInfo(currency) {
    // Initialize state with an empty object
    const [data, setData] = useState({});

    // Simulate API call by setting data from mockData
    useEffect(() => {
        // Check if currency exists in mockData
        if (mockData.hasOwnProperty(currency)) {
            setData(mockData[currency]);
        } else {
            console.error(`Currency ${currency} not found in mock data.`);
        }
    }, [currency]); // useEffect dependency

    // Return the fetched data or an empty object if currency not found
    return data;
}

export default useCurrencyInfo;
