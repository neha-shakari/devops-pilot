import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import StatusBadge from "../components/StatusBadge";


function Dashboard(){

    return (

        <div className="min-h-screen bg-slate-900">

            <Navbar />


            <div className="px-8 py-10">


                {/* Hero Section */}

                <div className="flex justify-between items-center">


                    <div>

                        <h1 className="text-5xl font-bold text-white">
                            Welcome to DevOpsPilot 🚀
                        </h1>


                        <p className="text-slate-400 text-lg mt-4">
                            AI-powered DevOps automation platform
                        </p>


                        <p className="text-slate-500 mt-2">
                            Generate Dockerfiles, CI/CD pipelines,
                            Kubernetes configurations and analyze repositories.
                        </p>


                    </div>


                    <StatusBadge />


                </div>




                {/* Stats */}

                <div className="grid md:grid-cols-3 gap-6 mt-10">


                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

                        <h3 className="text-slate-400">
                            DevOps Tools
                        </h3>

                        <p className="text-4xl font-bold text-white mt-2">
                            5
                        </p>

                    </div>



                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

                        <h3 className="text-slate-400">
                            AI Engine
                        </h3>

                        <p className="text-2xl font-bold text-white mt-2">
                            Gemini
                        </p>

                    </div>



                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

                        <h3 className="text-slate-400">
                            Platform Status
                        </h3>

                        <p className="text-2xl font-bold text-green-400 mt-2">
                            Online
                        </p>

                    </div>


                </div>





                {/* Feature Cards */}

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                    DevOps Automation Tools
                </h2>



                <div className="grid md:grid-cols-2 gap-8">


                    <FeatureCard
                        title="AI Log Analyzer"
                        description="Analyze application errors and get AI-powered solutions"
                        icon="🤖"
                        path="/log-analyzer"
                    />



                    <FeatureCard
                        title="Docker Generator"
                        description="Generate production-ready Dockerfiles automatically"
                        icon="🐳"
                        path="/docker"
                    />



                    <FeatureCard
                        title="GitHub Analyzer"
                        description="Analyze repositories and get DevOps recommendations"
                        icon="🔍"
                        path="/github-analyzer"
                    />



                    <FeatureCard
                        title="CI/CD Generator"
                        description="Create GitHub Actions workflows instantly"
                        icon="⚙️"
                        path="/cicd"
                    />



                    <FeatureCard
                        title="Kubernetes Generator"
                        description="Generate Kubernetes deployment configurations"
                        icon="☸️"
                        path="/kubernetes"
                    />


                </div>


            </div>


        </div>

    );
}


export default Dashboard;         