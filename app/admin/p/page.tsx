"use client";
import React, { useEffect, useState } from "react";
import SiteConfig from "@/config/site";
import { Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Delete } from "@mui/icons-material";

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

const Products: React.FC = () => {
    const router = useRouter();
    const [Products, setProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
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

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching Products:", error);
            }
        };

        fetchData();
    }, []);

    const deleteProduct = async (id: Product["id"]) => {
        try {
            const response = await fetch(
                `${SiteConfig.url}/api/delete/product`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id }),
                }
            );

            if (response.ok) {
                toast.success("Product deleted");
            } else {
                console.error("Error deleting product:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const filteredProducts = Products.filter((Product) =>
        Product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container py-8 w-[96%] m-auto">
            <div className="flex justify-between items-center max-md:flex-col max-md:mb-4">
                <h1 className="text-3xl font-bold mb-6">Products List</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by title"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <Button
                    variant="contained"
                    onClick={() => {
                        router.push("/admin/p/new");
                    }}
                >
                    Add product
                </Button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Title</th>
                            <th className="py-2 px-4 border">Body</th>
                            <th className="py-2 px-4 border">Mrp</th>
                            <th className="py-2 px-4 border">Cost</th>
                            <th className="py-2 px-4 border">Discount</th>
                            <th className="py-2 px-4 border">Tagline</th>
                            <th className="py-2 px-4 border">Time</th>
                            <th className="py-2 px-4 border">Orders</th>
                            <th className="py-2 px-4 border">Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((Product) => (
                            <tr key={Product._id}>
                                <td className="py-2 px-4 border">
                                    {Product.title}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Product.body}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Product.mrp}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Product.cost}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Product.discount}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Product.tagLine}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Product.time}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Product.orders.length}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Product.authorEmail}
                                </td>
                                <td className="py-1 px-2 border">
                                    <IconButton
                                        onClick={() =>
                                            deleteProduct(Product.id)
                                        }
                                    >
                                        <Delete />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
