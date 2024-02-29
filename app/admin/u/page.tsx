"use client";
import React, { useEffect, useState } from "react";
import SiteConfig from "@/config/site";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import toast from "react-hot-toast";

interface User {
    id: String;
    _id: null | undefined | React.Key;
    name: string;
    email: string;
    role: string;
    address: string;
    plan: string;
    time: string;
    image: string;
    isAdmin: boolean;
    isVerified: boolean;
    isBan: boolean;
    mails: String;
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${SiteConfig.url}/api/get/users`, {
                    cache: "no-store",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, []);

    const deleteUser = async (id: User["id"]) => {
        try {
            const response = await fetch(
                `${SiteConfig.url}/api/delete/user`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id }),
                }
            );

            if (response.ok) {
                toast.success("User deleted");
            } else {
                console.error("Error deleting user:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container py-8 w-[96%] m-auto">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-6">Users List</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by name or email"
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
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Role</th>
                            <th className="py-2 px-4 border">Plan</th>
                            <th className="py-2 px-4 border">Address</th>
                            <th className="py-2 px-4 border">Mails</th>
                            <th className="py-2 px-4 border">Registered On</th>
                            <th className="py-2 px-4 border">isAdmin</th>
                            <th className="py-2 px-4 border">isVerified</th>
                            <th className="py-2 px-4 border">isBan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user._id}>
                                <td className="py-2 px-4 border">
                                    {user.name}
                                </td>
                                <td className="py-2 px-4 border">
                                    {user.email}
                                </td>
                                <td className="py-2 px-4 border">
                                    {user.role}
                                </td>
                                <td className="py-2 px-4 border">
                                    {user.plan}
                                </td>
                                <td className="py-2 px-4 border">
                                    {user.address}
                                </td>
                                <td className="py-2 px-4 border">
                                    <Link href={`/admin/m/#${user.email}`} className="link">{user.mails.length}</Link>
                                </td>
                                <td className="py-2 px-4 border">
                                    {user.time}
                                </td>
                                <td className="py-2 px-4 border">
                                    {user.isAdmin ? (
                                        <span>true</span>
                                    ) : (
                                        <span>false</span>
                                    )}
                                </td>
                                <td className="py-2 px-4 border">
                                    {user.isVerified ? (
                                        <span>true</span>
                                    ) : (
                                        <span>false</span>
                                    )}
                                </td>
                                <td className="py-2 px-4 border">
                                    {user.isBan ? (
                                        <span>true</span>
                                    ) : (
                                        <span>false</span>
                                    )}
                                </td>
                                <td className="py-1 px-2 border">
                                    <IconButton
                                        onClick={() => deleteUser(user.id)}
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

export default Users;
