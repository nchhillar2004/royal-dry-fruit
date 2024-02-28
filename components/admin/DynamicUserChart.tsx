"use client"
import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const DynamicUserChart = () => {
    return (
        <Line
            datasetIdKey="id"
            data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [
                    {
                        
                        label: "Users",
                        data: [0, 3, 0, 0, 0, 0, 0, 0],
                    },
                    {
                        label: "Products",
                        data: [0, 0, 0, 0, 0, 0, 0, 0],
                    },
                    {
                        label: "Mails",
                        data: [0, 1, 0, 0, 0, 0, 0, 0],
                    },
                ],
            }}
        />
    );
};

export default DynamicUserChart;
