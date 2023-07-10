import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold text-blue-900 mt-20">
                CRM - Clients
            </h1>
            <p className="text-center">
                There's something wrong
            </p>            
            <p className="text-center">
                {error.message}
            </p>            
        </div>
    );
}