import Link from "next/link";

export default function Payment (){
    return(
        <div>
          <h1 className="text-center my-8 font-semibold text-4xl">Enter Your Details</h1>
         <div>
               <form className="flex flex-col justify-center items-center my-24 gap-5"> 
                <input type="Name" className="border-gray-400 px-4 py-2 w-3/12 border rounded-md" placeholder="Enter Your Name" />

                <input type="Email" className="border-gray-400 px-4 py-2 w-3/12 border rounded-md" placeholder="Enter Your Email" />

                <input type="Card" className="border-gray-400 px-4 py-2 w-3/12 border rounded-md" placeholder="Card Number" />

                <input type="Name" className="border-gray-400 px-4 py-2 w-3/12 border rounded-md" placeholder="Address" />
                 <button className="bg-blue-700 px-2 py-5 hover:font-semibold hover:w-52 w-44 my-10 text-white rounded-lg"><Link href="Thanks">Place Your Order</Link></button>

               </form>

            </div> 
      </div>  


    )
}

