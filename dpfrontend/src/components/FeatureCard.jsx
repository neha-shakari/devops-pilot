import { useNavigate } from "react-router-dom";


function FeatureCard({title, description, icon, path}) {

    const navigate = useNavigate();


    return (

        <div
            onClick={()=>navigate(path)}
            className="
            bg-slate-800
            p-8
            rounded-2xl
            border
            border-slate-700
            hover:border-blue-500
            hover:bg-slate-750
            hover:-translate-y-2
            transition-all
            cursor-pointer
            shadow-lg
            "
        >


            <div className="text-5xl mb-5">
                {icon}
            </div>



            <h2 className="text-2xl font-bold text-white">
                {title}
            </h2>



            <p className="text-slate-400 mt-3">
                {description}
            </p>



            <button
                className="
                mt-6
                text-blue-400
                hover:text-blue-300
                "
            >
                Open Tool →
            </button>


        </div>

    );

}


export default FeatureCard;