import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="bg-slate-800 px-8 py-5 flex justify-between items-center">

            <h1 className="text-2xl font-bold text-white">
                🚀 DevOpsPilot
            </h1>


            <div className="flex gap-8">

                <Link
                    to="/"
                    className="text-white hover:text-blue-400"
                >
                    Dashboard
                </Link>


                <a
                    href="https://github.com/neha-shakari/devops-pilot"
                    target="_blank"
                    className="text-white hover:text-blue-400"
                >
                    GitHub
                </a>
                <Link to="/docker-generator">
    Docker Generator
</Link>

            </div>

        </nav>
    );
}

export default Navbar;