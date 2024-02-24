import { TypographyH2, TypographyList, TypographyP } from "@/components/typography";
import TermsConfig from "@/config/terms";
import React from "react";

export default function TermsAndConditions() {
    return (
        <div className="w-[90%] lg:w-[60%] m-auto text-left text-[18px]">
            <h1 className="lg:text-4xl text-3xl my-4">{TermsConfig.title}</h1>
            <div className="terms-container">
            <p>
                Welcome to Royal Dry Fruit Point! These terms and conditions
                outline the rules and regulations for the use of our website.
            </p>
            <p>
                By accessing this website, we assume you accept these terms and
                conditions in full. Do not continue to use the Royal Dry Fruit
                Point website if you do not accept all of the terms and
                conditions stated on this page.
            </p>
            <hr className="my-5" />

            <TypographyH2 title={TermsConfig.terminology.title}/>
            <TypographyP title={TermsConfig.terminology.content}/>
            <hr className="my-5" />

            <TypographyH2 title={TermsConfig.cookies.title}/>
            <TypographyP title={TermsConfig.cookies.content}/>
            <hr className="my-5" />

            <TypographyH2 title={TermsConfig.license.title}/>
            <TypographyP title={TermsConfig.license.content}/>
            <hr className="my-5" />

            <TypographyH2 title={TermsConfig.mustNot.title}/>
            <TypographyList point1={TermsConfig.mustNot.point1} point2={TermsConfig.mustNot.point2} point3={TermsConfig.mustNot.point3} />
            <hr className="my-5" />

            <TypographyH2 title={TermsConfig.rights.title}/>
            <TypographyP title={TermsConfig.rights.content}/>
            </div>
        </div>
    );
}
