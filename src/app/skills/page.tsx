import React from "react";

export default function Skills() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-red-400">
            <h1 className="text-4xl font-bold mb-4">Skills</h1>
            <ul className="text-lg text-gray-800 space-y-4">
                <li>
                    <span className="font-semibold">Frontend Development:</span> Proficient in React, Next.js, and TypeScript for building modern, responsive web applications.
                </li>
                <li>
                    <span className="font-semibold">Styling &amp; UI:</span> Experienced with Tailwind CSS and CSS3 for crafting clean, accessible, and visually appealing interfaces.
                </li>
                <li>
                    <span className="font-semibold">Version Control:</span> Skilled in using Git and GitHub for collaborative development and code management.
                </li>
                <li>
                    <span className="font-semibold">API Integration:</span> Able to fetch, process, and display data from RESTful APIs.
                </li>
                <li>
                    <span className="font-semibold">Problem Solving:</span> Strong analytical and debugging skills to efficiently resolve issues and optimize code.
                </li>
            </ul>
        </main>
    );
}