"use client";
import React, { useEffect, useState } from "react";
import SiteConfig from "@/config/site";

interface Order {
    id: null | undefined | React.Key | string;
    Products: String[];
    Users: String[];
    time: string;
}

const Orders: React.FC = () => {
    const [Orders, setOrders] = useState<Order[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${SiteConfig.url}/api/get/orders`,
                    {
                        cache: "no-store",
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error("Error fetching Orders:", error);
            }
        };

        fetchData();
    }, []);

    const mappedOrder = Orders.map((o: Order) => {
        const { id, time, Users, Products } = o;
        return { id, time, Users, Products };
    });

    const mappedUser = mappedOrder.map((u: any) => {
        const { id, name, email } = u;
        return { id, name, email };
    });

    console.log(mappedUser);
    
    // const filteredOrders = Orders.filter((Order) =>
    //     Order.Users.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    return (
        <div className="container py-8 w-[96%] m-auto">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-6">
                    Order List {mappedOrder.length}
                </h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">User name</th>
                            <th className="py-2 px-4 border">User email</th>
                            <th className="py-2 px-4 border">Product name</th>
                            <th className="py-2 px-4 border">Product cost</th>
                            <th className="py-2 px-4 border">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {filteredOrders.map((Order) => (
                            <tr key={Order._id}>
                                <td className="py-2 px-4 border">
                                    {Order.Users}
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
