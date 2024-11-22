import Image from "next/image"

export default function Navbar (){
    return(
        <div>
            <header>
                <nav className="flex flex-col bg-gray-900">
                    <div className="flex flex-row border-b-4 border-gray-600 gap-x-2 mx-52 w-4/5 bg-gray-900">
                        <div className="flex flex-row ml-1 text-white float-left align-middle my-1">
                            <h1 className="hover:font-bold cursor-pointer text-white float-left align-middle my-1">Download App via SMS</h1>
                             </div>

                        <div className="flex flex-row text-white justify-end border-r-4 border-gray-400 float-left w-2/3 my-1">
                            <h1 className="hover:font-bold cursor-pointer gap-x-4 text-orange-400 float-left align-middle my-1 mx-2">اردو</h1>
                        </div>
                        
                        <div className="flex flex-row justify-center text-white border-r-4 border-gray-400 float-left align-middle w-28 my-1">
                            <h1 className="hover:font-bold cursor-pointer first-letter: gap-x-4 text-white float-left align-middle my-1 mx-2">Sign Up</h1>
                        </div>
                        <div className="text-white flex flex-row justify-center gap-x-4  float-left align-middle w-20 my-1">
                            <h1 className="hover:font-bold cursor-pointer gap-x-4 text-white float-left align-middle my-1 ">Sign In</h1>
                        </div>
                    </div>


                    <div className="flex flex-row gap-x-10 mx-52 w-4/5 bg-gray-900 py-7 my-1">
                          <div className="w-64">
                            <Image 
                            src="/PKW.jpg"
                            alt="Pak Wheel Logo"
                            color= "white"
                            width={500}
                            height={500} 
                            />
                          </div>
                          <div className="flex flex-row justify-around gap-x-5 w-full space-x-4">
                              <ul className="flex flex-row justify-around space-x-10 ml-10 w-4/5 text-white my-2">
                              <li className="hover:font-bold cursor-pointer">Used Cars</li>
                              <li className="hover:font-bold cursor-pointer">New Cars</li>
                              <li className="hover:font-bold cursor-pointer">Bikes</li>
                              <li className="hover:font-bold cursor-pointer">Auto Store</li>
                              <li className="hover:font-bold cursor-pointer">Videos</li>
                              <li className="hover:font-bold cursor-pointer">Forums</li>
                              <li className="hover:font-bold cursor-pointer">Blog</li>
                              <li className="hover:font-bold cursor-pointer">More</li>
                                </ul>                             
                                <div className="flex flex-row justify-around">
                                    <button className="hover:font-semibold text-white bg-red-500 py-2 px-2 rounded-lg justify-end w-40">Post an Ad</button>
                                </div>
                          </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}