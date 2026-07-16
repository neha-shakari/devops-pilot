import { useState } from "react";
import api from "../services/api";


function DockerGenerator(){

    const [repository, setRepository] = useState("");
    const [dockerfile, setDockerfile] = useState("");
    const [loading, setLoading] = useState(false);


    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(dockerfile);
            alert("Copied to clipboard!");
        } 
        catch(error){
            console.error(error);
        }
    };


    const downloadFile = () => {

        const blob = new Blob([dockerfile], {
            type: "text/plain",
        });


        const url = window.URL.createObjectURL(blob);


        const a = document.createElement("a");

        a.href = url;

        a.download = "Dockerfile";


        a.click();


        window.URL.revokeObjectURL(url);

    };



    const generateDockerfile = async () => {

        try {

            setLoading(true);
            setDockerfile("");

            const response = await api.post(
                "/api/docker/generate",
                {
                    repository: repository
                }
            );


            setDockerfile(response.data.dockerfile);

        }

        catch(error){

            console.error(error);

            setDockerfile("Error generating Dockerfile");

        }

        finally{

            setLoading(false);

        }

    };



    return (

        <div className="min-h-screen bg-slate-900 text-white p-10">


            <h1 className="text-4xl font-bold">
                🐳 Dockerfile Generator
            </h1>


            <p className="text-slate-400 mt-3">
                Generate production-ready Dockerfiles using AI
            </p>



            <textarea

                className="mt-8 w-full h-52 bg-slate-800 rounded-xl p-5 outline-none"

                placeholder="Enter GitHub repository URL, pom.xml, or package.json"

                value={repository}

                onChange={(e)=>setRepository(e.target.value)}

            />



            <button

                onClick={generateDockerfile}

                disabled={loading}

                className="mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl disabled:bg-gray-500"

            >

                {
                    loading
                    ?
                    "Generating..."
                    :
                    "Generate Dockerfile"
                }

            </button>





            {
                dockerfile &&

                <div className="mt-8 bg-slate-800 rounded-xl p-6">


                    <div className="flex justify-between items-center mb-4">


                        <h2 className="text-xl font-bold">
                            Generated Dockerfile
                        </h2>


                        <div className="flex gap-3">


                            <button
                                onClick={copyToClipboard}
                                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
                            >
                                📋 Copy
                            </button>


                            <button
                                onClick={downloadFile}
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                            >
                                ⬇ Download
                            </button>


                        </div>


                    </div>



                    <pre className="whitespace-pre-wrap text-slate-300">
                        {dockerfile}
                    </pre>


                </div>

            }


        </div>

    );

}


export default DockerGenerator;