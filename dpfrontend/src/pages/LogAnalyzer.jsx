import { useState } from "react";
import api from "../services/api";


function LogAnalyzer(){

    const [log, setLog] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);


    const analyzeLog = async () => {

        try {

            setLoading(true);

            const response = await api.post(
                "/api/ai/analyze",
                {
                    log: log
                }
            );

            setResult(response.data);

        } 
        catch(error){

            setResult("Error connecting to AI service");

        }
        finally{

            setLoading(false);

        }

    };


    return (

        <div className="min-h-screen bg-slate-900 text-white p-10">


            <h1 className="text-4xl font-bold">
                🔍 AI Log Analyzer
            </h1>


            <p className="text-slate-400 mt-3">
                Paste your application logs and get AI-powered analysis
            </p>



            <textarea

                className="mt-8 w-full h-52 bg-slate-800 rounded-xl p-5 outline-none"

                placeholder="Paste error logs here..."

                value={log}

                onChange={(e)=>setLog(e.target.value)}

            />



            <button

                onClick={analyzeLog}

                className="mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"

            >

                {
                    loading 
                    ? 
                    "Analyzing..."
                    :
                    "Analyze Log"
                }

            </button>




            {
                result &&

                <div className="mt-8 bg-slate-800 rounded-xl p-6">

                    <h2 className="text-xl font-bold mb-3">
                        AI Analysis
                    </h2>


                    <pre className="whitespace-pre-wrap text-slate-300">
                        {result}
                    </pre>


                </div>

            }


        </div>

    );

}


export default LogAnalyzer;