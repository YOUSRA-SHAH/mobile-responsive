import Link from "next/link";
export default function Navbar (){
    return(
        <div> 
        <nav className="flex-coloumn md:flex-row justify-evenly w-full bg-fuchsia-500 h-32">
                <div className="flex-row md:flex-col lg:flex-col text-white  w-4/5" >
                <div className="flex gap-8">
                    <div className="font-semibold">Home</div>
                    <div className="font-semibold">About</div>
                    <div className="font-semibold">Contact</div>
                    <div className="font-semibold">Reviews</div>
                </div>
                </div>
            </nav>
        
        </div>
    )
}