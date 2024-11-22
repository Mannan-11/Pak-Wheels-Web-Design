import Link from "next/link";

export default function Footer(){
    return(
        <div>
            <footer>
                <nav className="flex flex-row text-black align-bottom border border-solid border-white justify-evenly bg-gray-200 w-full h-20 items-center ">
                    <Link href = "/" target = "_blank" className= "hover:font-bold">Home Page</Link>
                    <Link href = "https://github.com/Mannan-11/Pak-Wheels-Web-Design" className= "hover:font-bold">Designed By: Abdul Mannan</Link>
                </nav>
            </footer>

        </div>
    )
}