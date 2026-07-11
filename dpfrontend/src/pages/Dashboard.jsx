import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

    const [message, setMessage] = useState("");

    useEffect(() => {
        api.get("/api/health")
            .then((response) => {
                setMessage(response.data);
            })
            .catch(() => {
                setMessage("Backend connection failed");
            });
    }, []);

    return (
        <div>
            <h1>DevOpsPilot Dashboard</h1>

            <h3>{message}</h3>
        </div>
    );
}

export default Dashboard;           