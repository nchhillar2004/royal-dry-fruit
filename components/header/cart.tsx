"use client";
import React, { useEffect, useState } from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSession } from "next-auth/react";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 0,
        top: 2,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}));

export default function Cart() {
    const [Orders, setOrders] = useState([]);
    const { data: session }: any = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/get/oneuser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: session?.user?.id,
                    }),
                });

                const data = await response.json();
                setOrders(data?.orders);
            } catch (error) {
                console.error("Error fetching Orders:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={Orders?.length} color="error" max={9}>
                <ShoppingCartIcon className="text-white" />
            </StyledBadge>
        </IconButton>
    );
}
