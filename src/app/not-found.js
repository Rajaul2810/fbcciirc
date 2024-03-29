import Link from 'next/link'

export default function NotFound() {
    return (
        <div className=' flex justify-center items-center h-screen bg-slate-100'>
            <div className=' p-5 shadow-md rounded-md bg-white'>
                <h2 className=' text-3xl font-bold'>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/" className=' btn'>Return Home</Link>
            </div>
        </div>
    )
}