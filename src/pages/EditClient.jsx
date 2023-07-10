import FormClient from "../components/FormClient";
import Error from "../components/Error";
import { Form, useActionData, useLoaderData, useNavigate, redirect } from "react-router-dom";
import { getClient, updateClient } from "../data/Clients";

export async function loader({params}) {
    const client = await getClient(params.clientsID)
    if (Object.values(client).length <= 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Client not found'
        }) 
    }
    return client;
}

export async function action({request, params}) {
    const formData = await request.formData(); //gets form data
    const data = Object.fromEntries(formData); // transforms form data into object, it has key-value
    const errors = [];
    if (Object.values(data).includes('')) {
        errors.push('All gaps are obligatory');
    }
    if (Object.keys(errors).length > 0) {
        return errors;
    }
    await updateClient(params.clientsID, data);

    return redirect('/');
}

export default function EditClient({}) {
    const client = useLoaderData();
    const navigate = useNavigate();
    const errors = useActionData();

    return (
        <div>
            <h1 className="font-black text-blue-900 text-4xl">Edit CLient</h1>
            <p className="mt-3">Edit a client's data</p>
            <div className="flex justify-end">
                <button className="bg-blue-800 px-3 py-1 font-bold text-white uppercase hover:bg-blue-700"
                onClick={() => navigate('/')}>
                    Back
                </button>
            </div>
            <div className="bg-white shadow rounded-md mx-auto md:w-3/4 px-5 py-10 mt-20">
                {errors?.length && errors.map((err, i) => <Error key={i}>{err}</Error>)}
                <Form method="POST">
                    <FormClient client={client}/>
                    <input type="submit"
                    className="mt-5 w-full bg-blue-800 text-white text-lg uppercase p-3 font-bold rounded-sm hover:bg-blue-900 cursor-pointer"
                    value="Update client"/>
                </Form>
            </div>
        </div>
    );
}