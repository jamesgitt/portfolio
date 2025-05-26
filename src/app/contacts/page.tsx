export default function Contacts() {
    return (
        <main className="webBg flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-gray-700 mb-6">
                I would love to hear from you! Feel free to reach out through any of the methods below:
            </p>
            <ul className="text-lg text-gray-800 space-y-2">
                <li>
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:james@example.com" className="text-blue-600 underline">
                        james@example.com
                    </a>
                </li>
                <li>
                    <span className="font-semibold">LinkedIn:</span>{" "}
                    <a
                        href="https://www.linkedin.com/in/james"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        linkedin.com/in/james
                    </a>
                </li>
                <li>
                    <span className="font-semibold">GitHub:</span>{" "}
                    <a
                        href="https://github.com/james"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        github.com/james
                    </a>
                </li>
            </ul>
        </main>
    );
}