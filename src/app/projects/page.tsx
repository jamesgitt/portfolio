import React from "react";
import PulsateElement from "../components/PulsateElement";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/Carousel";

const projects = [
    {
        videoSrc: "./videos/videoDeepfakeDetection.mp4",
        poster: "./images/videoDeepfakePoster.jpg",
        title: "Filipino Voice DeepFake Detection",
        description:
            "A study I collaborated in, wherein us researchers gathered and preprocessed real and deepfaked Filipino Audio Data, and used multiple models to evaluate which method is most effective. Pioneer in Filipino language deepfake detection.",
        tech: [
            "Python",
            "TensorFlow",
            "Gradient Boosting",
            "Decision Tree",
            "Random Forest",
            "Extra Trees",
            "ResNet-50",
            "VGG-16",
            "HuBERT",
            "Wav2Vec2",
        ],
        links: [
            {
                href: "https://github.com/jamesgitt",
                label: "Code",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width="25"
                        height="25"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        clipRule="evenodd"
                        viewBox="0 0 64 64"
                    >
                        <path id="Icons" fill="none" d="M0-192h1280v800H0z"></path>
                        <g id="Icons1">
                            <path
                                id="github"
                                fill="#740000"
                                d="M32.029 8.345C18.759 8.345 8 19.104 8 32.378c0 10.617 6.885 19.624 16.435 22.803 1.202.22 1.64-.522 1.64-1.16 0-.569-.02-2.081-.032-4.086-6.685 1.452-8.095-3.222-8.095-3.222-1.093-2.775-2.669-3.514-2.669-3.514-2.182-1.492.165-1.462.165-1.462 2.412.171 3.681 2.477 3.681 2.477 2.144 3.672 5.625 2.611 6.994 1.997.219-1.553.838-2.612 1.526-3.213-5.336-.606-10.947-2.669-10.947-11.877 0-2.623.937-4.769 2.474-6.449-.247-.608-1.072-3.051.235-6.36 0 0 2.018-.646 6.609 2.464 1.917-.533 3.973-.8 6.016-.809 2.041.009 4.097.276 6.017.809 4.588-3.11 6.602-2.464 6.602-2.464 1.311 3.309.486 5.752.239 6.36 1.54 1.68 2.471 3.826 2.471 6.449 0 9.232-5.62 11.263-10.974 11.858.864.742 1.632 2.208 1.632 4.451 0 3.212-.029 5.804-.029 6.591 0 .644.432 1.392 1.652 1.157 9.542-3.185 16.421-12.186 16.421-22.8 0-13.274-10.76-24.033-24.034-24.033"
                            ></path>
                        </g>
                    </svg>
                ),
            },
            {
                href: "https://github.com/jamesgitt",
                label: "Research",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#740000"
                        className="size-[1.35rem]"
                    >
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                    </svg>
                ),
            },
        ],
    },
    {
        videoSrc: "./videos/videoPortfolioShowcase.mp4",
        poster: "./images/videoPortfolioPoster.jpg",
        title: "Personal Portfolio Website",
        description:
            "A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features animated backgrounds, a project carousel, and a clean, accessible design.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Vercel",
        ],
        links: [
            {
                href: "https://github.com/jamesgitt/portfolio",
                label: "Code",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width="25"
                        height="25"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        clipRule="evenodd"
                        viewBox="0 0 64 64"
                    >
                        <path id="Icons" fill="none" d="M0-192h1280v800H0z"></path>
                        <g id="Icons1">
                            <path
                                id="github"
                                fill="#740000"
                                d="M32.029 8.345C18.759 8.345 8 19.104 8 32.378c0 10.617 6.885 19.624 16.435 22.803 1.202.22 1.64-.522 1.64-1.16 0-.569-.02-2.081-.032-4.086-6.685 1.452-8.095-3.222-8.095-3.222-1.093-2.775-2.669-3.514-2.669-3.514-2.182-1.492.165-1.462.165-1.462 2.412.171 3.681 2.477 3.681 2.477 2.144 3.672 5.625 2.611 6.994 1.997.219-1.553.838-2.612 1.526-3.213-5.336-.606-10.947-2.669-10.947-11.877 0-2.623.937-4.769 2.474-6.449-.247-.608-1.072-3.051.235-6.36 0 0 2.018-.646 6.609 2.464 1.917-.533 3.973-.8 6.016-.809 2.041.009 4.097.276 6.017.809 4.588-3.11 6.602-2.464 6.602-2.464 1.311 3.309.486 5.752.239 6.36 1.54 1.68 2.471 3.826 2.471 6.449 0 9.232-5.62 11.263-10.974 11.858.864.742 1.632 2.208 1.632 4.451 0 3.212-.029 5.804-.029 6.591 0 .644.432 1.392 1.652 1.157 9.542-3.185 16.421-12.186 16.421-22.8 0-13.274-10.76-24.033-24.034-24.033"
                            ></path>
                        </g>
                    </svg>
                ),
            },
            {
                href: "https://jamesgitt.com",
                label: "Live",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#740000"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                    >
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c1.657 0 3 4.03 3 8s-1.343 8-3 8-3-4.03-3-8 1.343-8 3-8zm-7.938 8c.445-3.31 3.13-5.94 6.438-6.438C9.06 6.445 6.445 9.06 6.062 12zm0 2c.383 2.94 2.998 5.555 6.438 6.438C6.445 17.555 9.06 14.94 6.062 14zm13.876 0c-.445 3.31-3.13 5.94-6.438 6.438C14.94 17.555 17.555 14.94 17.938 12zm0-2c-.383-2.94-2.998-5.555-6.438-6.438C17.555 6.445 14.94 9.06 17.938 12z" />
                    </svg>
                ),
            },
        ],
    },
    {
        videoSrc: "./videos/videoChatbotDemo.mp4",
        poster: "./images/videoChatbotPoster.jpg",
        title: "Customer Service Chatbot",
        description:
            "A conversational AI chatbot for customer service, built using Python and the Rasa framework. Integrates with Facebook Messenger and supports multilingual queries.",
        tech: [
            "Python",
            "Rasa",
            "NLP",
            "Facebook Messenger API",
            "Docker",
        ],
        links: [
            {
                href: "https://github.com/jamesgitt/chatbot",
                label: "Code",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width="25"
                        height="25"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        clipRule="evenodd"
                        viewBox="0 0 64 64"
                    >
                        <path id="Icons" fill="none" d="M0-192h1280v800H0z"></path>
                        <g id="Icons1">
                            <path
                                id="github"
                                fill="#740000"
                                d="M32.029 8.345C18.759 8.345 8 19.104 8 32.378c0 10.617 6.885 19.624 16.435 22.803 1.202.22 1.64-.522 1.64-1.16 0-.569-.02-2.081-.032-4.086-6.685 1.452-8.095-3.222-8.095-3.222-1.093-2.775-2.669-3.514-2.669-3.514-2.182-1.492.165-1.462.165-1.462 2.412.171 3.681 2.477 3.681 2.477 2.144 3.672 5.625 2.611 6.994 1.997.219-1.553.838-2.612 1.526-3.213-5.336-.606-10.947-2.669-10.947-11.877 0-2.623.937-4.769 2.474-6.449-.247-.608-1.072-3.051.235-6.36 0 0 2.018-.646 6.609 2.464 1.917-.533 3.973-.8 6.016-.809 2.041.009 4.097.276 6.017.809 4.588-3.11 6.602-2.464 6.602-2.464 1.311 3.309.486 5.752.239 6.36 1.54 1.68 2.471 3.826 2.471 6.449 0 9.232-5.62 11.263-10.974 11.858.864.742 1.632 2.208 1.632 4.451 0 3.212-.029 5.804-.029 6.591 0 .644.432 1.392 1.652 1.157 9.542-3.185 16.421-12.186 16.421-22.8 0-13.274-10.76-24.033-24.034-24.033"
                            ></path>
                        </g>
                    </svg>
                ),
            },
            {
                href: "https://youtu.be/demo-chatbot",
                label: "Demo",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#740000"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                    >
                        <path d="M10 16.5l6-4.5-6-4.5v9z" />
                        <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z" />
                    </svg>
                ),
            },
        ],
    },
    {
        videoSrc: "./videos/videoEcommerceDemo.mp4",
        poster: "./images/videoEcommercePoster.jpg",
        title: "E-commerce Platform",
        description:
            "A scalable e-commerce platform with product search, cart, and payment integration. Built with MERN stack and Stripe API for secure payments.",
        tech: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "Stripe API",
            "Redux",
        ],
        links: [
            {
                href: "https://github.com/jamesgitt/ecommerce",
                label: "Code",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width="25"
                        height="25"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        clipRule="evenodd"
                        viewBox="0 0 64 64"
                    >
                        <path id="Icons" fill="none" d="M0-192h1280v800H0z"></path>
                        <g id="Icons1">
                            <path
                                id="github"
                                fill="#740000"
                                d="M32.029 8.345C18.759 8.345 8 19.104 8 32.378c0 10.617 6.885 19.624 16.435 22.803 1.202.22 1.64-.522 1.64-1.16 0-.569-.02-2.081-.032-4.086-6.685 1.452-8.095-3.222-8.095-3.222-1.093-2.775-2.669-3.514-2.669-3.514-2.182-1.492.165-1.462.165-1.462 2.412.171 3.681 2.477 3.681 2.477 2.144 3.672 5.625 2.611 6.994 1.997.219-1.553.838-2.612 1.526-3.213-5.336-.606-10.947-2.669-10.947-11.877 0-2.623.937-4.769 2.474-6.449-.247-.608-1.072-3.051.235-6.36 0 0 2.018-.646 6.609 2.464 1.917-.533 3.973-.8 6.016-.809 2.041.009 4.097.276 6.017.809 4.588-3.11 6.602-2.464 6.602-2.464 1.311 3.309.486 5.752.239 6.36 1.54 1.68 2.471 3.826 2.471 6.449 0 9.232-5.62 11.263-10.974 11.858.864.742 1.632 2.208 1.632 4.451 0 3.212-.029 5.804-.029 6.591 0 .644.432 1.392 1.652 1.157 9.542-3.185 16.421-12.186 16.421-22.8 0-13.274-10.76-24.033-24.034-24.033"
                            ></path>
                        </g>
                    </svg>
                ),
            },
            {
                href: "https://ecommerce-demo.com",
                label: "Live",
                icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#740000"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                    >
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c1.657 0 3 4.03 3 8s-1.343 8-3 8-3-4.03-3-8 1.343-8 3-8zm-7.938 8c.445-3.31 3.13-5.94 6.438-6.438C9.06 6.445 6.445 9.06 6.062 12zm0 2c.383 2.94 2.998 5.555 6.438 6.438C6.445 17.555 9.06 14.94 6.062 14zm13.876 0c-.445 3.31-3.13 5.94-6.438 6.438C14.94 17.555 17.555 14.94 17.938 12zm0-2c-.383-2.94-2.998-5.555-6.438-6.438C17.555 6.445 14.94 9.06 17.938 12z" />
                    </svg>
                ),
            },
        ],
    },
];


export default function Projects() {
    return (
        <main className="flex flex-col items-center justify-center">
            <PulsateElement>
                <Carousel className="items-center justify-center w-[30rem]">
                    <CarouselContent>
                        {projects.map((project, idx) => (
                            <CarouselItem key={idx}>
                                <div className="videoCard my-4 ml-4 relative">
                                    {/* Simple navigation buttons inside the videoCard */}
                                    <div className="absolute left-[-6rem] bottom-12 z-10">
                                        <CarouselPrevious className="arrowButton" />
                                    </div>
                                    <div className="absolute left-[23rem] bottom-12 z-10">
                                        <CarouselNext className="arrowButton"/>
                                    </div>
                                    <video
                                        src={project.videoSrc}
                                        width="400"
                                        autoPlay={true}
                                        loop={true}
                                        muted={true}
                                        poster={project.poster}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col items-center justify-center gap-4">
                                            <h1 className="projectHeader mt-8">{project.title}</h1>
                                            <p className="projectDescription">{project.description}</p>
                                            <div className="flex flex-row flex-wrap gap-2 justify-center">
                                                {project.tech.map((tech, i) => (
                                                    <p className="pilledText" key={i}>{tech}</p>
                                                ))}
                                            </div>
                                            <div className="flex flex-row items-center justify-center gap-4">
                                                {project.links.map((link, i) => (
                                                    <Link
                                                        key={i}
                                                        href={link.href}
                                                        className="projectRe flex"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {link.icon}
                                                        <span>{link.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* Remove the old navigation buttons outside the videoCard */}
                </Carousel>
            </PulsateElement>
        </main>
    );
}