import { useState } from "react";
import axios from "axios";

function CICDGenerator() {
  const [language, setLanguage] = useState("");
  const [workflow, setWorkflow] = useState("");
  const [loading, setLoading] = useState(false);


  // Copy function
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(workflow);
            alert("Copied to clipboard!");
        } catch (error) {
            console.error(error);
        }
    };
    const downloadFile = () => {
        const blob = new Blob([workflow], { type: "text/plain" });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "ci.yml";

        a.click();

        window.URL.revokeObjectURL(url);
    };

  const generateWorkflow = async () => {
    if (!language) {
      alert("Please select a language.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/cicd/generate",
        {
          language: language,
        }
      );

      setWorkflow(response.data);
    } catch (error) {
      console.error("Error generating workflow:", error);
      alert("Failed to generate CI/CD workflow.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        ⚙️ CI/CD Generator
      </h1>

      <div className="bg-slate-800 rounded-xl p-6 shadow-lg max-w-3xl">
        <label className="block mb-2 text-lg">
          Select Project Type
        </label>

        <select
          className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 mb-4"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Choose a language</option>
          <option value="java">Java (Spring Boot)</option>
          <option value="node">Node.js</option>
        </select>

        <button
          onClick={generateWorkflow}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition disabled:bg-gray-500"
        >
          {loading ? "Generating..." : "Generate Workflow"}
        </button>

                {workflow && (
          <div className="mt-8">

            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-semibold">
                Generated GitHub Actions Workflow
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

            <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
              {workflow}
            </pre>

          </div>
        )}

      </div>
    </div>
  );
}

export default CICDGenerator;