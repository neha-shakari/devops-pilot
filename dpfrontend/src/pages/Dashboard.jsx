import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import StatusBadge from "../components/StatusBadge";


function Dashboard(){

    return (

        <div className="min-h-screen bg-slate-900">

            <Navbar />

            <div className="px-6 py-8">

                <div className="flex justify-between items-center">
                    
                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            Welcome to DevOpsPilot
                        </h1>

                        <p className="text-slate-400 mt-2">
                            AI-powered DevOps automation platform
                        </p>
                    </div>

                    <StatusBadge />

                </div>


                <div className="grid md:grid-cols-2 gap-6 mt-10">

                    <FeatureCard
                        title="AI Log Analyzer"
                        description="Analyze errors and get AI-powered solutions"
                        icon="🔍"
                        path="/log-analyzer"
                    />


                    <FeatureCard
                        title="Docker Generator"
                        description="Generate production-ready Dockerfiles"
                        icon="🐳"
                        path="/docker"
                    />
                    <FeatureCard
                        title="GitHub Analyzer"
                        description="Analyze repositories and get DevOps insights"
                        icon="🔍"
                        path="/github-analyzer"
                    />


                    <FeatureCard
                        title="CI/CD Generator"
                        description="Create GitHub Actions workflows"
                        icon="⚙️"
                        path="/cicd"
                    />


                    <FeatureCard
                        title="Kubernetes Generator"
                        description="Generate Kubernetes YAML files"
                        icon="☸️"
                        path="/kubernetes"
                    />

                </div>

            </div>

        </div>
    );
}


export default Dashboard;         