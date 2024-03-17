"use client";
import React, { useEffect, useState } from "react";
import SiteConfig from "@/config/site";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { AnyBulkWriteOperation } from "mongodb";

interface Mail {
    id: String;
    _id: React.Key;
    title: string;
    body: string;
    type: string;
    authorEmail: string;
    time: string;
    isGranted: boolean;
}

const Mails: React.FC = () => {
    const { data: session }: any = useSession();
    const [Mails, setMails] = useState<Mail[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${SiteConfig.url}/api/get/mails`,
                    {
                        cache: "no-store",
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = await response.json();
                setMails(data);
            } catch (error) {
                console.error("Error fetching Mails:", error);
            }
        };

        fetchData();
    }, []);

    const deleteMail = async (id: Mail["id"]) => {
        try {
            const response = await fetch(`${SiteConfig.url}/api/delete/mail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                toast.success("Mail deleted");
            } else {
                console.error("Error deleting mail:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting mail:", error);
        }
    };

    const filteredMails = Mails.filter(
        (Mail) =>
            Mail.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            Mail.authorEmail.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container py-8 w-[96%] m-auto">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-6">Mails List</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by title or email"
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
                            <th className="py-2 px-4 border">Title</th>
                            <th className="py-2 px-4 border">Body</th>
                            <th className="py-2 px-4 border">Type</th>
                            <th className="py-2 px-4 border">Sent by</th>
                            <th className="py-2 px-4 border">Sent on</th>
                            <th className="py-2 px-4 border">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {filteredMails.map((Mail) => (
                            <tr key={Mail._id} id={Mail.authorEmail}>
                                <td className="py-2 px-4 border">
                                    {Mail.title}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Mail.body}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Mail.type}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Mail.authorEmail}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Mail.time}
                                </td>
                                <td className="py-2 px-4 border">
                                    {Mail.isGranted ? (
                                        <span>Granted</span>
                                    ) : (
                                        <span>Not granted</span>
                                    )}
                                </td>
                                <td className="py-1 px-2 border">
                                    <IconButton
                                        onClick={() => deleteMail(Mail.id)}
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

export default Mails;
