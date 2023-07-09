import { useLoaderData } from "react-router-dom";
import RowClient from "../components/RowClient";

/**
 * This 'Loader' is similar to useEffect, whenever the component is ready, hook useLoaderData loads all data from loader
 * @returns data
 */
export function loader() {
    return [
        {
            id: 1,
            name: 'Juan',
            phone: 102013313,
            email: "juan@juan.com",
            bussiness: 'Codigo Con Juan'
        },
        {
            id: 2,
            name: 'Karen',
            phone: 138198313,
            email: "karen@juan.com",
            bussiness: 'Codigo Con Juan'
        },
        {
            id: 3,
            name: 'Josue',
            phone: 31983913,
            email: "josue@juan.com",
            bussiness: 'Codigo Con Juan'
        },
        {
            id: 4,
            name: 'Miguel',
            phone: 319381983,
            email: "miguel@juan.com",
            bussiness: 'Codigo Con Juan'
        },
        {
            id: 5,
            name: 'Pedro',
            phone: 1398198938,
            email: "pedro@juan.com",
            bussiness: 'Codigo Con Juan'
        },
    ];
}
/**
 * In this page we use a 'Loader'
 * @param {*} param0 
 * @returns  
 */
export default function Index({}) {
    const clients = useLoaderData();
    return (
        <div>
            <h1 className="font-black text-blue-900 text-4xl">Clients</h1>
            <p className="mt-3">Manage your clients</p>
            {clients.length > 0 ? 
            <table className="w-full bg-white shadow table-auto mt-5">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th className="p-2">Client</th>
                        <th className="p-2">Contact</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <RowClient
                        key={client.id}
                        client={client}
                        />
                    ))}
                </tbody>
            </table>
             :
            <p className="text-center mt-10">
                You don't have clients yet
            </p>
            }
        </div>
    );
}