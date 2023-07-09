import { Outlet, Link, useLocation } from "react-router-dom";
/**
 * This component is the main Layout, it uses an 'Outlet' to set the layout behaviour.
 * Everything outside the outlet will be part of the layout
 * @param {null} param0 
 * @returns Main Layout ued for all pages
 */
export default function Layout({}) {
    const location = useLocation();
    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white"> 
                    CRM - Clients
                </h2>
                <nav className="mt-10">
                    <Link className={`${location.pathname==='/'?'text-blue-300':'text-white'} text-2xl mt-2 block hover:text-blue-300`}
                     to={'/'}>
                        Clients 
                     </Link>

                    <Link className={`${location.pathname==='/us'?'text-blue-300':'text-white'} text-2xl mt-2 block hover:text-blue-300`}
                     to={'/us'}>
                        About us
                     </Link>

                    <Link className={`${location.pathname==='/clients/new'?'text-blue-300':'text-white'} text-2xl mt-2 block hover:text-blue-300 `}
                     to={'/clients/new'}>
                        New Client
                     </Link>
                </nav>
            </aside>
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet/>
            </main>
        </div>
    );
}
/**
 * Link component is used to nav links but more optimized than <a> tags
 */