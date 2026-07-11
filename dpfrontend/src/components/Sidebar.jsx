import { Link } from "react-router-dom";

function Sidebar(){

    return (
        <aside className="w-64 min-h-screen bg-slate-800 text-white p-6">

            <h1 className="text-2xl font-bold mb-8">
                DevOpsPilot 🚀
            </h1>


            <nav className="flex flex-col gap-4">

                <Link 
                    to="/"
                    className="hover:text-blue-400"
                >
                    🏠 Dashboard
                </Link>


                <Link 
                    to="/log-analyzer"
                    className="hover:text-blue-400"
                >
                    🔍 Log Analyzer
                </Link>


                <Link 
                    to="/docker"
                    className="hover:text-blue-400"
                >
                    🐳 Docker Generator
                </Link>


                <Link 
                    to="/cicd"
                    className="hover:text-blue-400"
                >
                    ⚙️ CI/CD Generator
                </Link>


                <Link 
                    to="/kubernetes"
                    className="hover:text-blue-400"
                >
                    ☸️ Kubernetes
                </Link>

            </nav>

        </aside>
    );
}

export default Sidebar;