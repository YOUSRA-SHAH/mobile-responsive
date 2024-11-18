import Link from "next/link";
export default function Navbar (){
    return(
        <div> 
        <nav className="flex-coloumn md:flex-row justify-evenly w-full bg-fuchsia-300 h-32">
                <div className="flex-row md:flex-col lg:flex-col text-white  w-4/5" >
                <div className="flex gap-8">
                    <div className="font-semibold text-green-600">Home</div>
                    <div className="font-semibold text-orange-600">About</div>
                    <div className="font-semibold text-blue-700">Contact</div>
                    <div className="font-semibold text-pink-700">Reviews</div>
                </div>
                </div>
            </nav>
        
        </div>
    )
}