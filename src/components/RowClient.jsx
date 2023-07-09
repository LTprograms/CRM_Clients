/**
 * Clients data used in a table row
 * @param {Object} client 
 * @returns  
 */
export default function RowClient({client}) {
    const {name, email, phone, bussiness} = client;
    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-2xl text-gray-800">
                    {name}
                </p>
                <p>{bussiness}</p>
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
                className="text-blue-600 hover:text-blue-700 uppercase text-xs font-bold">
                    edit
                </button>
                <button type="button"
                className="text-red-600 hover:text-red-700 uppercase text-xs font-bold">
                    delete
                </button>
            </td>
        </tr>
    );
}