import { useState } from "react";
import axios from "axios";

function KubernetesGenerator() {
  const [appName, setAppName] = useState("");
  const [image, setImage] = useState("");
  const [yaml, setYaml] = useState("");
  const [loading, setLoading] = useState(false);

  const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(workflow); // change workflow to dockerfile/yaml as needed
    alert("Copied to clipboard!");
  } catch (error) {
    console.error(error);
  }
};
const downloadFile = () => {
  const blob = new Blob([workflow], {
    type: "text/plain",
  });

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "ci.yml";

  a.click();

  window.URL.revokeObjectURL(url);
};

  const generateYaml = async () => {
    if (!appName || !image) {
      alert("Please enter both application name and Docker image.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/kubernetes/generate",
        {
          appName,
          image,
        }
      );

      setYaml(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate Kubernetes YAML.");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen bg-slate-900 text-white p-8">

    <h1 className="text-4xl font-bold mb-6">
      ☸️ Kubernetes YAML Generator
    </h1>


    <div className="bg-slate-800 rounded-xl p-6 shadow-lg max-w-4xl">

      <label className="block mb-2">
        Application Name
      </label>

      <input
        type="text"
        placeholder="expense-tracker"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
        className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 mb-4"
      />


      <label className="block mb-2">
        Docker Image
      </label>

      <input
        type="text"
        placeholder="expense-tracker:latest"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 mb-6"
      />


      <button
        onClick={generateYaml}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition disabled:bg-gray-500"
      >
        {loading ? "Generating..." : "Generate YAML"}
      </button>



      {yaml && (

        <div className="mt-8">


          <div className="flex justify-between items-center mb-3">

            <h2 className="text-2xl font-semibold">
              Generated Kubernetes YAML
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
            {yaml}
          </pre>


        </div>

      )}

    </div>

  </div>
);
}
export default KubernetesGenerator;