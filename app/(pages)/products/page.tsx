"use client";
import React, { useEffect, useState } from "react";
import SiteConfig from "@/config/site";
import { time } from "@/utils/getTime";
import { useSession } from "next-auth/react";
import { createLogs } from "@/data/logs";

interface Product {
    id: String;
    _id: null | undefined | React.Key;
    title: string;
    body: String;
    mrp: String;
    authorEmail: String;
    cost: String;
    discount: String;
    tagLine: String;
    time: string;
    image: string;
    orders: String[];
    author: String[];
}

export default function ProductsPage() {
    const [Products, setProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { data: session }: any = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${SiteConfig.url}/api/get/products`,
                    {
                        cache: "no-store",
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const logData = {
                    userId: session?.user?.id,
                    logType: "Success",
                    message: "Products fetched",
                    errorCode: response.status,
                    endpoint: "/api/get/products",
                    responseBody: response.statusText,
                };
                createLogs(logData);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching Products:", error);
            }
        };

        fetchData();
    }, []);

    const handleOrder = async (productId: any, userId: any) => {
        try {
            const response = await fetch(`${SiteConfig.url}/api/post/order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId,
                    userId,
                    time,
                }),
            });
        } catch (error) {
            console.error("Error fetching Products:", error);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="lg:text-4xl text-3xl my-4">Explore products</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search products"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="products">
                <ul className="card list-none">
                    {Products.map((Product) => (
                        <li key={Product._id}>
                            <div className="rounded-md hover:bg-gray-100">
                                <h2>{Product.title}</h2>
                                <p>Description - {Product.body}</p>
                                <time className="text-[12px]">Added on: {Product.time}</time>
                                <p className="text-[12px]">Added by: {Product.authorEmail}</p>
                                <button
                                className="nav-button"
                                    onClick={() => {
                                        handleOrder(
                                            Product._id,
                                            session?.user?._id
                                        );
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
