import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


function GithubAnalyzer(){

    const [repository, setRepository] = useState("");
    const [analysis, setAnalysis] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const analyzeRepository = async () => {

        try {

            setLoading(true);
            setAnalysis("");

            const response = await api.post(
                "/api/github/analyze",
                {
                    repository: repository
                }
            );

            setAnalysis(response.data.analysis);

        }

        catch(error){

            console.error(error);

            setAnalysis("Error analyzing repository");

        }

        finally{

            setLoading(false);

        }

    };



    return (

        <div className="min-h-screen bg-slate-900 text-white p-10">


            <h1 className="text-4xl font-bold">
                🔍 GitHub Repository Analyzer
            </h1>


            <p className="text-slate-400 mt-3">
                Analyze repository architecture, technologies, and DevOps improvements
            </p>



            <input

                className="mt-8 w-full bg-slate-800 rounded-xl p-5 outline-none"

                placeholder="Enter GitHub repository URL"

                value={repository}

                onChange={(e)=>setRepository(e.target.value)}

            />



            <button

                onClick={analyzeRepository}

                className="mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"

            >

                {
                    loading
                    ?
                    "Analyzing..."
                    :
                    "Analyze Repository"
                }

            </button>




            {
                analysis &&

                <div className="mt-8 bg-slate-800 rounded-xl p-6">


                    <h2 className="text-2xl font-bold mb-5">
                        📊 Repository Analysis
                    </h2>



                    <pre className="whitespace-pre-wrap text-slate-300">
                        {analysis}
                    </pre>



                    <div className="flex gap-4 mt-8">


                        <button

                            onClick={()=>navigate("/docker")}

                            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl"

                        >
                            🐳 Generate Dockerfile
                        </button>



                        <button

                            onClick={()=>navigate("/cicd")}

                            className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl"

                        >
                            ⚙️ Generate CI/CD
                        </button>




                        <button

                            onClick={()=>navigate("/kubernetes")}

                            className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl"

                        >
                            ☸️ Generate Kubernetes
                        </button>



                    </div>


                </div>

            }



        </div>

    );

}


export default GithubAnalyzer;