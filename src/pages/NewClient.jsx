import { Form, useNavigate, useActionData, redirect } from "react-router-dom";
import FormClient from "../components/FormClient";
import Error from "../components/Error";
import { registerClient } from "../data/Clients";

/**
 * Action for the From, it expects a request in params
 * @param {request} param0 
 * @returns 
 */
export async function action({request}) { // async await = promise
    const formData = await request.formData(); //gets form data
    const data = Object.fromEntries(formData); // transforms form data into object, it has key-value
    const errors = [];
    if (Object.values(data).includes('')) {
        errors.push('All gaps are obligatory');
    }
    if (Object.keys(errors).length > 0) {
        return errors;
    }
    await registerClient(data);

    return redirect('/');
}

/**
 * useNavigate is used for apply link effects to buttons
 * @param {*} param0 
 * @returns 
 */
export default function NewClient({}) {
    const navigate = useNavigate();
    const errors = useActionData();
    return (
        <div>
            <h1 className="font-black text-blue-900 text-4xl">New CLient</h1>
            <p className="mt-3">Fill all gaps</p>
            <div className="flex justify-end">
                <button className="bg-blue-800 px-3 py-1 font-bold text-white uppercase hover:bg-blue-700"
                onClick={() => navigate('/')}>
                    Back
                </button>
            </div>
            <div className="bg-white shadow rounded-md mx-auto md:w-3/4 px-5 py-10 mt-20">
                {errors?.length && errors.map((err, i) => <Error key={i}>{err}</Error>)}
                <Form method="POST">
                    <FormClient/>
                    <input type="submit"
                    className="mt-5 w-full bg-blue-800 text-white text-lg uppercase p-3 font-bold rounded-sm hover:bg-blue-900 cursor-pointer"
                    value="Register client"/>
                </Form>
            </div>
        </div>
    );
}