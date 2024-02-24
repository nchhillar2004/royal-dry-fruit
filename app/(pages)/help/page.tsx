import Link from "next/link";
import React from "react";
import {
    TypographyH1,
    TypographyH2,
    TypographyList,
    TypographyP,
} from "@/components/typography";
import SiteConfig from "@/config/site";

export default function page() {
    return (
        <div>
            <h1 className="lg:text-4xl text-3xl my-4" id="create-account">
                Help & Support
            </h1>
            <hr className="mb-5" />
            <div className="flex flex-col lg:flex-row">
                <div className="nav flex flex-col space-y-2 lg:pt-4 text-nowrap pr-5 w-fit lg:border-r items-start">
                    <Link href="#create-account" className="link">
                        Creating new account
                    </Link>
                    <Link href="#login" className="link">
                        Logging in
                    </Link>
                    <Link href="#forgot-password" className="link">
                        Forgot password
                    </Link>
                    <Link href="#contact" className="link">
                        Contact form
                    </Link>
                    <Link href="#buying" className="link">
                        How to buy products?
                    </Link>
                    <Link href="#mails" className="link">
                        Send us mails
                    </Link>
                    <Link href="#locate" className="link">
                        Locate us
                    </Link>
                </div>

                <div className="right lg:text-[18px] w-full lg:ml-8 mt-4">
                    <div id="create-account">
                        <TypographyH2 title="Creating new account" />
                        <TypographyP
                            title={`Welcome to ${SiteConfig.title}!`}
                        />
                        <p>
                            Creating an account with us is quick and easy.
                            Follow these steps to get started:
                        </p>
                        <ul
                            className="my-6 ml-6 list-disc [&>li]:mt-2"
                            id="login"
                        >
                            <li>
                                Navigate to the{" "}
                                <Link href="/register" className="link">
                                    register
                                </Link>{" "}
                                page.
                            </li>
                            <li>
                                Fill in your full name, email address, and
                                create a secure password.
                            </li>
                            <li>
                                Click 'Register' to complete the registration
                                process.
                            </li>
                        </ul>

                        <p>
                            By creating an account, you unlock exclusive
                            benefits, personalized recommendations, and seamless
                            checkout experiences.
                        </p>
                        <p className="text-[14px] text-grey">
                            *By creating an account, you agree to{" "}
                            {SiteConfig.shortTitle}'s
                            <Link href="/terms" className="ml-1 link">
                                Terms and Conditions
                            </Link>
                            .
                        </p>
                    </div>
                    <hr className="my-5" />

                    <div id="login">
                        <TypographyH2 title="Logging in" />
                        <TypographyP title="Welcome Back!" />
                        <p>
                            To access your account and enjoy a personalized
                            shopping experience, follow these steps:
                        </p>
                        <ul
                            className="my-6 ml-6 list-disc [&>li]:mt-2"
                            id="forgot-password"
                        >
                            <li>
                                Click on the{" "}
                                <Link href="/login" className="link">
                                    login
                                </Link>{" "}
                                button at the top-right corner.
                            </li>
                            <li>Enter your email and password.</li>
                            <li>Click 'Login' to access your account.</li>
                            <li>
                                If forgot password then click{" "}
                                <Link href="#forgot-password">here</Link> for
                                assistance.
                            </li>
                        </ul>
                        <p>
                            If you encounter any issues, feel free to reach out
                            to us by sending <Link href="/contact">mail</Link>{" "}
                            for assistance.
                        </p>
                    </div>
                    <hr className="my-5" />

                    <div id="forgot-password">
                        <TypographyH2 title="Forgot password" />
                        <TypographyP title="We apologize for any inconvenience. If you've forgotten your password and are unable to recover it, please follow these steps:" />
                        <ul
                            className="my-6 ml-6 list-disc [&>li]:mt-2"
                            id="contact"
                        >
                            <li>
                                Visit our{" "}
                                <Link href="/contact" className="link">
                                    contact page
                                </Link>{" "}
                                to reach out to our support team.
                            </li>
                            <li>
                                Fill in the contact form with your full name,
                                registered email address, and a brief message
                                explaining the situation.
                            </li>
                            <li>Click "Submit."</li>
                        </ul>
                        <p>
                            Our support team will review your request promptly.
                            To ensure your account security, we will delete your
                            current account associated with the provided email
                            address. You can then create a new account using the
                            same email address.
                        </p>
                    </div>
                    <hr className="my-5" />

                    <div id="contact">
                        <TypographyH2 title="Contact form" />
                        <TypographyP title="We're Here to Help!" />
                        <p>
                            Have a question or need assistance? Reach out to us
                            through our contact form. Here's how:
                        </p>
                        <ul
                            className="my-6 ml-6 list-disc [&>li]:mt-2"
                            id="buying"
                        >
                            <li>
                                Navigate to the{" "}
                                <Link href="/contact" className="link">
                                    Contact
                                </Link>{" "}
                                page.
                            </li>
                            <li>
                                Fill in your details and message in the provided
                                form.
                            </li>
                            <li>
                                Click "Submit," and we'll get back to you as
                                soon as possible.
                            </li>
                        </ul>
                    </div>
                    <hr className="my-5" />

                    <div id="buying">
                        <TypographyH2 title="Buying products" />
                        <TypographyP title="Thank you for considering Royal Dry Fruit Point for your purchases. Please note that we currently do not facilitate online sales. All transactions are carried out at our physical store location." />
                        <p>To make a purchase, simply follow these steps:</p>
                        <ul
                            className="my-6 ml-6 list-disc [&>li]:mt-2"
                            id="mails"
                        >
                            <li>
                                Visit Our Store: Locate us. Our friendly staff
                                is ready to assist you with your selections.
                            </li>
                            <li>
                                Browse In-Store Selection: Explore our diverse
                                range of high-quality dry fruits available at
                                the store in Kharkhoda.
                            </li>
                            <li>
                                Checkout: Head to the checkout counter, where
                                our staff will assist you in completing the
                                purchase
                            </li>
                        </ul>

                        <p>
                            We value the in-person shopping experience and look
                            forward to serving you at our store. If you have any
                            questions or need further assistance, feel free to
                            reach out to us via our{" "}
                            <Link href="/contact" className="link">
                                Contact Page.
                            </Link>
                        </p>
                    </div>
                    <hr className="my-5" />

                    <div id="mails">
                        <TypographyH2 title="Mail us" />
                        <TypographyP title="Connect with Us via Email!" />
                        <p>Have a query or feedback? Send us an email:</p>
                        <ul
                            className="my-6 ml-6 list-disc [&>li]:mt-2"
                            id="locate"
                        >
                            <li>
                                General Inquiries: info@royaldryfruitpoint.com
                            </li>
                            <li>
                                Customer Support: support@royaldryfruitpoint.com
                            </li>
                        </ul>
                        <p>
                            We value your input and will respond promptly to
                            your emails.
                        </p>
                    </div>
                    <hr className="my-5" />

                    <div id="locate">
                        <TypographyH2 title="Locate us" />
                        <TypographyP
                            title="Visit Our Store!
"
                        />
                        <p>Find us at the following location:</p>
                        <TypographyP title="Royal Dry Fruit Point" />
                        <p>
                            Dev Print Studios Kharkhoda, main, Sonipat Rd, <br></br>near
                            thana chauk, opposite bikaner, Pacca Bagh,<br></br>
                            Kharkhoda, Haryana 131402
                        </p>
                        <p className="mt-2">
                        Use the Google maps for directions click{" "}
                        <Link href={SiteConfig.location} className="link" target="_blank">
                            here
                        </Link>
                        . We look forward to welcoming you to our store! Feel
                        free to customize the content to match your website's
                        style and branding.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
