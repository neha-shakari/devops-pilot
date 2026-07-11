import { useState } from "react";
import axios from "axios";

function DockerGenerator() {

    const [repository, setRepository] = useState("");
    const [dockerfile, setDockerfile] = useState("");
    const [loading, setLoading] = useState(false);

    const generateDockerfile = async () => {

        setLoading(true);
        setDockerfile("");

        try {

            const response = await axios.post(
                "http://localhost:8080/api/docker/generate",
                {
                    repository: repository
                }
            );

            setDockerfile(response.data.dockerfile);

        } catch (error) {

            setDockerfile(
                "Error generating Dockerfile: " + error.message
            );

        }

        setLoading(false);
    };


    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-3xl font-bold mb-6">
                🐳 Dockerfile Generator
            </h1>


            <textarea
                className="w-full p-4 border rounded-lg mb-4"
                rows="5"
                placeholder="Enter GitHub repository URL, pom.xml, or package.json"
                value={repository}
                onChange={(e) => setRepository(e.target.value)}
            />


            <button
                onClick={generateDockerfile}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
                {loading ? "Generating..." : "Generate Dockerfile"}
            </button>


            {dockerfile && (
                <div className="mt-8">

                    <h2 className="text-xl font-semibold mb-3">
                        Generated Dockerfile
                    </h2>

                    <pre className="bg-black text-white p-5 rounded-lg overflow-auto">
                        {dockerfile}
                    </pre>

                </div>
            )}

        </div>
    );
}

export default DockerGenerator;