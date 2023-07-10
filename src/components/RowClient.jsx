import { useNavigate, Form, redirect } from "react-router-dom";
import { deleteClient } from "../data/Clients";

export async function action({params}) {
    deleteClient(params.clientsID)
    return redirect('/')
}
/**
 * Clients data used in a table row
 * @param {Object} client 
 * @returns  
 */
export default function RowClient({client}) {
    const navigate = useNavigate();
    const {name, email, phone, company, id} = client;
    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-2xl text-gray-800">
                    {name}
                </p>
                <p>{company}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">
                        Email:&nbsp;
                    </span>
                    {email}
                </p>
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">
                        Phone:&nbsp;
                    </span>
                    {phone}
                </p>
            </td>
            <td className="p-6 flex gap-3">
                <button type="button"
                className="text-blue-600 hover:text-blue-700 uppercase text-xs font-bold"
                onClick={()=>navigate(`/clients/${id}/edit`)}>
                    edit
                </button>
                <Form method="POST"
                action={`clients/${id}/delete`}
                onSubmit={e => {
                    if (!confirm("Aare you sure you want to delete this client?")) {
                        e.preventDefault();
                    }
                }}>
                    <button type="submit"
                    className="text-red-600 hover:text-red-700 uppercase text-xs font-bold">
                        delete
                    </button>
                </Form>
            </td>
        </tr>
    );
}