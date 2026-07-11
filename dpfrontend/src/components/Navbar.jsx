function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-5 bg-slate-800 text-white">
            <h1 className="text-2xl font-bold">
                DevOpsPilot 🚀
            </h1>

            <div className="flex items-center gap-6">
                <span className="hover:text-blue-400 cursor-pointer">
                    Dashboard
                </span>

                <span className="hover:text-blue-400 cursor-pointer">
                    GitHub
                </span>
            </div>
        </nav>
    );
}

export default Navbar;