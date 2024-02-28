import React, { Key } from "react";
import DynamicUserChart from "@/components/admin/DynamicUserChart";
import { getUsers } from "@/data/users";
import { getMails } from "@/data/mails";
import { getProducts } from "@/data/products";
import Link from "next/link";

export default async function AdminDashboard() {
    const users = await getUsers();
    const usersCount = users?.length;

    const mails = await getMails();
    const mailsCount = mails?.length;

    const products = await getProducts();
    const productsCount = products?.length;

    return (
        <div>
            <div className="container mx-auto pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/admin/u">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">
                                Users
                            </h2>
                            <p className="text-3xl font-bold">{usersCount}</p>
                        </div>
                    </Link>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Income</h2>
                        <p className="text-3xl font-bold">$ 0.00</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Products</h2>
                        <p className="text-3xl font-bold">{productsCount}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Mails</h2>
                        <p className="text-3xl font-bold">{mailsCount}</p>
                    </div>
                </div>
                <DynamicUserChart />
            </div>
        </div>
    );
}
