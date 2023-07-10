export default function Error({children}) {
    return (
        <div className="text-center my-4 p-3 uppercase font-bold bg-red-600 text-white">
            {children}
        </div>
    );
}