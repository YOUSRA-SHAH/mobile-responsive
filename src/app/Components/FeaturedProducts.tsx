import Image from "next/image";
const FeaturedProducts = () => {
    return(
        <div className="space-around lg:flex-row flex-col space:around justify-around">
        <div className="space-around md:w-5/12 w-full lg:space-evenly mb-20">
            <Image
            src="/breakfast burger.jpg"
            alt="burger"
            width={200}
            height={200}
            />
        <p className="text-left">$5</p>
        <p>BreakFast Light Paty</p>    
        </div>
             
 <div className="space-around md:items-center md:w-6/12 lg:space-evenly w-full mb:20 items-center justify-around">
<Image
src="/cozy slippy pancakes.webp"
alt="pancakes"
width={200}
height={200}
/>
<p className="text-left">$3</p>
<p>PanCakes</p>    
</div>


<div className="space-around md:w-6/12lg:space-evenly w-full mb:20 items-center">
<Image
src="/donuts.jpg"
alt="Donuts"
width={200}
height={200}
/>
<p className="text-left">$4.5</p>
<p>Donuts</p>
</div>

<div className=" space-around md:w-5/12 w-full mb:20 lg:space-around items-center">
<Image
src="/ferns petals smoothy.jpeg"
alt="smoothy"
width={200}
height={200}
/>
<p className="text-left">$2.35</p>
<p>Ferns Petals Smoothy</p>
</div>


<div className="space-around md:w-5/12 w-full mb:20 lg:space-around items-center">
<Image
src="/latte coffee.jpg"
alt="Latte Coffee"
width={200}
height={200}
/>
<p className="text-left">$3.55</p>
<p>latte Coffee</p>
</div>


<div className="space-around md:w-5/12 w-full mb:20 lg:space-around items-center">
<Image
src="/oreo fudge coffee.jpeg"
alt="Oreo Fudge Coffee"
width={200}
height={200}
/>
<p className="text-left">$3.5</p>
<p>Oreo Fudge Coffee</p>
</div>

</div>
    )
}
export default FeaturedProducts