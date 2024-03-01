"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { time } from "@/utils/getTime";
import Loading from "@/components/common/loading";
import { createLogs } from "@/data/logs";

export default function AddProduct() {
    const router = useRouter();
    const { data: session, status: sessionStatus }: any = useSession();

    const handlePost = async (e: any) => {
        e.preventDefault();
        const title = e.target[0].value;
        const body = e.target[1].value;
        const brand = e.target[2].value;
        const mrp = parseInt(e.target[3].value, 10);
        const cost = parseInt(e.target[4].value, 10);
        const discount = parseInt(e.target[5].value, 10);
        const tagLine = e.target[6].value;
        const imageInput = e.target[7];
        const image = imageInput.files[0];

        if (!title || !body) {
            toast.error("Fill all fields");
        }
        try {
            const authorId = session.user?.id;
            const authorEmail = session.user?.email;

            const res = await fetch("/api/post/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    body,
                    mrp,
                    cost,
                    discount,
                    tagLine,
                    brand,
                    authorEmail,
                    authorId,
                    time,
                }),
            });
            const logData = {
                userId: session?.user?.id,
                logType: "Info",
                message: "Mails fetched",
                errorCode: res.status,
                endpoint: "/api/post/product",
                responseBody: res.statusText,
            };
            createLogs(logData);
            if (res.status === 200) {
                toast.success("Product added successfully");
                router.push("/admin/p");
            }
        } catch (error) {
            console.log("Error adding product");
        }
    };
    if (sessionStatus === "loading") {
        return <Loading />;
    }
    return (
        <div className="w-[96%] m-auto">
            <h1>Add product</h1>
            <div className="card w-full">
                <form onSubmit={handlePost} className="inputfld">
                    <label htmlFor="title">Product title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Product title"
                        required
                    />
                    <label htmlFor="content">Description</label>
                    <textarea
                        className="min-h-[150px]"
                        id="content"
                        name="content"
                        placeholder="Description..."
                        required
                    />
                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        placeholder="Brand"
                        required
                    />

                    <div className="flex items-center justify-between">
                        <div>
                            <label htmlFor="mrp">Mrp</label>
                            <input
                                type="number"
                                id="mrp"
                                name="mrp"
                                placeholder="Mrp"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cost">Cost</label>
                            <input
                                type="number"
                                id="cost"
                                name="cost"
                                placeholder="Cost"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="discount">Discount</label>
                            <input
                                type="number"
                                id="discount"
                                name="discount"
                                defaultValue={0}
                                placeholder="Discount %"
                            />
                        </div>
                    </div>
                    <label htmlFor="tagline">Tag line</label>
                    <input
                        type="text"
                        id="tagline"
                        name="tagline"
                        defaultValue=""
                        placeholder="Add a tagline"
                    />
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        id="image"
                        name="image"
                        defaultValue=""
                        placeholder="Add an image"
                    />
                    <br />
                    <button
                        type="submit"
                        className="bg-red-700 mt-4 hover:bg-red-800 py-2 px-4 rounded-md text-white"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
