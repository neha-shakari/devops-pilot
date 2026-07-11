import { useEffect, useState } from "react";
import api from "../services/api";


function StatusBadge(){

    const [status, setStatus] = useState(false);


    useEffect(()=>{

        api.get("/api/health")
        .then(()=>{
            setStatus(true);
        })
        .catch(()=>{
            setStatus(false);
        });

    },[]);


    return (

        <div 
        className={
            status
            ?
            "bg-green-500/20 text-green-400 px-4 py-2 rounded-full"
            :
            "bg-red-500/20 text-red-400 px-4 py-2 rounded-full"
        }
        >

            {
                status
                ?
                "🟢 Backend Connected"
                :
                "🔴 Backend Offline"
            }

        </div>

    );
}


export default StatusBadge;