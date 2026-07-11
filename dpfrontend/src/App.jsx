import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LogAnalyzer from "./pages/LogAnalyzer";
import DockerGenerator from "./pages/DockerGenerator";
import CICDGenerator from "./pages/CICDGenerator";
import KubernetesGenerator from "./pages/KubernetesGenerator";
import DockerGenerator from "./pages/DockerGenerator";


function App(){

    return (

        <BrowserRouter>

            <Routes>
              <Route 
    path="/docker-generator" 
    element={<DockerGenerator />} 
/>


                <Route path="/" element={<Dashboard />} />

                <Route 
                    path="/log-analyzer" 
                    element={<LogAnalyzer />} 
                />

                <Route 
                    path="/docker" 
                    element={<DockerGenerator />} 
                />

                <Route 
                    path="/cicd" 
                    element={<CICDGenerator />} 
                />

                <Route 
                    path="/kubernetes" 
                    element={<KubernetesGenerator />} 
                />

            </Routes>

        </BrowserRouter>

    );
}


export default App;