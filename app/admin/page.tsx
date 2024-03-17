import React, { Key } from "react";
import { getUsers } from "@/data/users";
import { getMails } from "@/data/mails";
import { getProducts } from "@/data/products";
import Link from "next/link";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

export default async function AdminDashboard() {
    const users = await getUsers();
    const usersCount = users?.length;

    const mails = await getMails();
    const mailsCount = mails?.length;

    const products = await getProducts();
    const productsCount = products?.length;
    var income = 0;
    var color = "black";

    if (income < 0) {
        var color = "red-600";
    }
    if (income > 0) {
        var color = "green-600";
    }
    return (
        <div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto w-[96%] mb-8">
                    <Link href="/admin/u">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center space-x-2 mb-4">
                                <h2 className="text-lg font-semibold">Users</h2>
                                <PeopleRoundedIcon />
                            </div>
                            <p className="text-3xl font-bold">{usersCount}</p>
                        </div>
                    </Link>

                    <Link href="/admin/i">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center space-x-2 mb-4">
                                <h2 className="text-lg font-semibold">
                                    Income
                                </h2>
                                <PaidRoundedIcon />
                            </div>
                            <div className="flex">
                                {" "}
                                <p
                                    className={`text-3xl text-${color} font-bold mr-2`}
                                >
                                    $ {income}
                                </p>
                                {/* <IconButton color="error">
                                    <TrendingDownRoundedIcon className="text-red-600" />
                                </IconButton>
                                <IconButton color="success">
                                    <TrendingUpRoundedIcon className="text-green-600" />
                                </IconButton> */}
                            </div>
                        </div>
                    </Link>

                    <Link href="/admin/p">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center space-x-2 mb-4">
                                <h2 className="text-lg font-semibold">
                                    Products
                                </h2>
                                <InventoryRoundedIcon />
                            </div>
                            <p className="text-3xl font-bold">
                                {productsCount}
                            </p>
                        </div>
                    </Link>

                    <Link href="/admin/m">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center space-x-2 mb-4">
                                <h2 className="text-lg font-semibold">Mails</h2>
                                <MailRoundedIcon />
                            </div>
                            <p className="text-3xl font-bold">{mailsCount}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
