import React from "react";

export default function Projects() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-900 to-pink-800">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <ul className="text-lg text-gray-800 space-y-4">
                <li>
                    <span className="font-semibold">Personal Portfolio Website</span> - A responsive website built with Next.js and Tailwind CSS to showcase my work and skills.
                </li>
                <li>
                    <span className="font-semibold">Task Manager App</span> - A simple to-do list application using React and local storage for task persistence.
                </li>
                <li>
                    <span className="font-semibold">Weather Dashboard</span> - A dashboard that fetches and displays weather data from a public API.
                </li>
            </ul>
        </main>
    );
}