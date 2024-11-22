import Link from "next/link"
import Image from "next/image"

export default function Alto (){
    return(
        <div className="flex flex-col justify-center items-center space-y-16 my-4">
             <div className="w-full h-auto flex flex-row justify-center float-left">
                <h1 className="font-serif font-bold text-4xl text-gray-700 text-center">
                    Suzuki Alto 2024 Price In Pakistan , Image , Review & Specs
                </h1> </div>
               <div className="w-96 h-auto float-left">
                <Image src="/alto.jpg" alt="Suzuki Alto" width={500} height={500} />
               </div>
               <div className="w-10/12 h-auto">
                <p className="font-serif text-sm text-gray-700 text-justify">Lorem ipsum dolar sit amet consectetur , adipisicing elit. Quais quearat magni fugiat at recusandae tenetur reiciendis dolores, doloremque alias? Obcaecati aliquam ducimus sunt quia quae veniam, dolore incidunt deleniti atque iste nam enim vitae? Veritatis consequatur blanditiis, molestias assumenda eos quas ab labore at? Autem iusto dolorem, quae et molestias quos, consectetur inventore obcaecati mollitia numquam excepturi facilis alias quaerat atque, quasi vero architecto porro repellendus sapiente cum nobis error esse. Beatae in voluptatum porro sint inventore? Quod vitae voluptate esse veniam, vel error autem nesciunt, natus earum fugit minus magni? Dicta cupiditate, in dolorum, unde illo quae facere totam officia explicabo, sed libero doloribus sunt quia minus id iure hic vel soluta eveniet praesentium voluptatum porro aspernatur laboriosam! Quo nulla tenetur sapiente. Tempore quas excepturi, ea nisi natus veritatis incidunt veniam dolorum pariatur neque. Beatae, atque ipsam officia similique error tenetur quo inventore consequuntur consectetur repellat tempore dolore vel molestias iusto quidem est facere deleniti cumque! Neque cumque nisi harum sequi, ducimus sit, quas corporis pariatur quod reiciendis optio quasi voluptatem ab quo tempora delectus id nulla aliquid dolorum modi! Perspiciatis, magnam provident et id corrupti, aperiam odio laudantium architecto rem, dolores cumque expedita maxime earum sunt repellendus? Tempora culpa accusamus iste aspernatur tenetur atque eos deleniti quaerat, explicabo soluta.</p>
               </div>
               <div className="font-serif text-2xl text-green-500 font-semibold">PKR 25,00,000</div>
               <div>
                <button className="border border-solid m-10 bg-blue-600 rounded-lg py-5 px-2 font-serif text-sm text-white ml-4 w-40 hover:font-bold hover:bg-blue-700"><Link href="/Payment">Make Payment</Link></button>
               </div>

        </div>
    )
}