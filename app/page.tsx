import Link from "next/link"
import Image from "next/image"

export default function Home () {
    return(
    <div>
         <div className="flex flex-col bg-white space-y-9 py-10 h-full">
            <div className="flex flex-row w-11/12 mx-16 flaot-left my-5">
                <fieldset className="flex flex-auto border  justify-around border-solid border-gray-400 w-3/4 h-auto py-10 mt-4 mx-28 space-x-1 my-4">
                    <legend className="flex flex-auto text-gray-700 font-serif text-center font-bold mx-4 text-3xl px-3">
                        Sell Your Car On PakWheels And Get The Best Price
                    </legend>
                    <div className="flex flex-col h-auto w-2/5 my-3 ml-2 space-y-2 justify-center">
                        <div className=" flex flex-row float-left text-center">
                            <h1 className="text-center font-bold mx-10 text-blue-900 text-xl">Post Your Ad On Pakwheels{" "}</h1>
                        </div>
                        <div className="flex flex-row float-left text-center">
                            <h2 className="text-center mx-10 text-gray-700 text-sm"><span className="text-green-500 m-2">&#10003;</span>Post Your Ad On For Free In 3 Easy Steps{" "}</h2>
                        </div>
                        <div className="flex flex-row float-left text-center">
                            <h2 className="text-center mx-10 text-gray-700 text-sm"><span className="text-green-500 m-2">&#10003;</span>Get Genuine Offers From Verified Buyers{" "}</h2>
                        </div>
                        <div className="flex flex-row float-left text-center">
                            <h2 className="text-center mx-10 text-gray-700 text-sm"><span className="text-green-500 m-2">&#10003;</span>Sell Your Car At The Best Prices{" "}</h2>
                        </div>
                        <button className="border border-solid hover:bg-red-700 bg-red-600 py-2 px-2 text-sm text-white w-40 mx-10 mb-2 rounded-lg">Post Your Ad</button>
                    </div>
                     <div className="flex flex-col h-auto w-32 my-3 ml-2 space-y-2 justify-center">
                        <h1 className="font-bold text-gray-700 text-xl">OR</h1>
                     </div>
                     <div className="flex flex-col h-auto w-2/5 my-3 ml-2 space-y-2 justify-center">
            <div className="flex flex-row float-left text-center">
              <h1 className="font-serif text-left w-80 font-bold mx-10 text-blue-900 text-xl">
                Try PakWheels Sell It For Me{" "}
              </h1>
            </div>
            <div className="flex flex-row float-left text-center">
              <h2 className="font-serif text-center mx-10 text-gray-700 text-sm">
              <span className="text-green-500 m-2">&#10003;</span>Dedicated Sales Expert to Sell your Car{" "}
              </h2>
            </div>
            <div className="flex flex-row float-left text-center">
              <h2 className="font-serif text-center mx-10 text-gray-700 text-sm">
              <span className="text-green-500 m-2">&#10003;</span>We Bargain for you and share the Best Offer{" "}
              </h2>
            </div>
            <div className="flex flex-row float-left text-center">
              <h2 className="font-serif text-center mx-10 text-gray-700 text-sm">
              <span className="text-green-500 m-2">&#10003;</span>We ensure Safe & Secure Transaction{" "}
              </h2>
            </div>
            <button className="border border-solid hover:bg-blue-600 bg-blue-500 py-2 px-2 font-serif text-sm text-white mx-10 mb-2 w-40 rounded-lg">
              Register Your Car
            </button>
          </div>
                </fieldset>
            </div>
            </div> 



    <div className="flex flex-row ">
       
          <div className="flex my-8 w-3/4 float-left mx-52">
              <div className="font-semibold text-gray-700 text-3xl font-serif">Featured New Cars</div>
          </div>

          <div className="my-8 mx-52 py-2 align-middle w-2/3  ">
              <div className="float-end text-sm text-blue-400 hover:font-semibold hover:text-blue-500">View All New Cars</div>
          </div>
        </div>
    
            <div>
                <ul className="p-5 border-b-4 mx-52 flex flex-row gap-x-10 text-gray-700">
                    <li className="hover:underline underline-offset-8 decoration-blue-500 text-xl hover:font-semibold">Popular</li>
                    <li className="hover:underline underline-offset-8 decoration-blue-500 text-xl hover:font-semibold">Upcomig</li>
                    <li className="hover:underline underline-offset-8 decoration-blue-500 text-xl hover:font-semibold">Newly Luanched</li>
                </ul>
            </div>
            <div className="flex flex-row justify-around">
                <div>
                    <Image
                    src="/alto.jpg"
                    alt="Suzuki Alto"
                    width={300}
                    height={300}
                    />
                    <p className="text-center text-xl font-semibold pt-10 text-blue-800 hover:font-extrabold" ><Link href="/Cars/Alto">Suzuki Alto</Link></p>
                   <p className="text-center text-xl font-semibold pt-1 text-green-500">PKR 23.3-30.5 lacs</p>
                   <p className="text-center text-xl font-light pt-3 text-gray-500">199 Reviews</p>
                    </div>
        

                    <div className="flex flex-row justify-around">
                <div className=" py-10">
                    <Image
                    src="/city.jpg"
                    alt="Honda City"
                    width={300}
                    height={300}
                    />
                    <p className="text-center text-xl font-semibold pt-20 text-blue-800 hover:font-extrabold" ><Link href="/Cars/HondaCity">Honda City</Link></p>
                   <p className="text-center text-xl font-semibold pt-1 text-green-500">PKR 46.5-58.5 lacs</p>
                   <p className="text-center text-xl font-light pt-3 text-gray-500">458 Reviews</p>
                    </div>
                 </div>

                 <div className="flex flex-row justify-around">
                <div>
                    <Image
                    src="/civic.jpg"
                    alt="Honda Civic"
                    width={300}
                    height={300}
                    />
                    <p className="text-center text-xl font-semibold pt-14 text-blue-800 hover:font-extrabold" ><Link href="/Cars/HondaCivic">Honda Civic</Link></p>
                   <p className="text-center text-xl font-semibold pt-1 text-green-500">PKR 86.6-99.0 lacs</p>
                   <p className="text-center text-xl font-light pt-3 text-gray-500">357 Reviews</p>
                    </div>
                 </div>
            


                 <div className="flex flex-row justify-around">
                <div className=" py-10">
                    <Image
                    src="/corolla.jpg"
                    alt="Toyota Corolla"
                    width={300}
                    height={300}
                    />
                    <p className="text-center text-xl font-semibold pt-20 text-blue-800 hover:font-extrabold" ><Link href="/Cars/ToyotaCorolla">Toyota Corolla</Link></p>
                   <p className="text-center text-xl font-semibold pt-1 text-green-500">PKR 59.7-75.5 lacs</p>
                   <p className="text-center text-xl font-light pt-3 text-gray-500">621 Reviews</p>
                    </div>
                 </div>
            




            
            </div>
    </div>
    )
}