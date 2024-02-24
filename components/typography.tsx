import Link from "next/link";
import React from "react";

function TypographyH1(props: { title: string | undefined }) {
    return (
        <h1 className="scroll-m-20 text-[24px] leading-none lg:text-[27px] tracking-tight">
            {props.title}
        </h1>
    );
}

function TypographyH2(props: { title: string | undefined }) {
    return (
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {props.title}
        </h1>
    );
}

function TypographyH3(props: { title: string | number }) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {props.title}
        </h3>
    );
}

function TypographyP(props: { title: string | number }) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">{props.title}</p>
    );
}

function TypographyList(props: {
    point1: string | number;
    point2: string | number;
    point3: string | number;
}) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>{props.point1}</li>
            <li>{props.point2}</li>
            <li>{props.point3}</li>
        </ul>
    );
}

export {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyP,
    TypographyList,
};
