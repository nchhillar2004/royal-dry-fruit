"use client";
import React, { useEffect, useState } from "react";
import SiteConfig from "@/config/site";

interface User {
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
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${SiteConfig.url}/api/getusers`, {
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

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container py-8 w-[96%] m-auto">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-6">User List</h1>
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
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Role</th>
                            <th className="py-2 px-4 border">Plan</th>
                            <th className="py-2 px-4 border">Address</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
