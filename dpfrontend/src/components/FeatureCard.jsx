import { useNavigate } from "react-router-dom";

function FeatureCard({title, description, icon, path}) {

    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(path)}
            className="
            bg-slate-800 
            p-6 
            rounded-2xl
            border
            border-slate-700
            hover:border-blue-500
            hover:-translate-y-1
            transition
            cursor-pointer
            "
        >

            <div className="text-4xl text-blue-400 mb-4">
                {icon}
            </div>

            <h2 className="text-xl font-bold text-white">
                {title}
            </h2>

            <p className="text-slate-400 mt-2">
                {description}
            </p>

        </div>
    );
}

export default FeatureCard;