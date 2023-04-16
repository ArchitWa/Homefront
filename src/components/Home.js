export default function Home() {
    return (
        <div className="animate-fadeIn animate-duration-[4000ms]">
            <div className="header">
                <img className="absolute" src="https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <h1 className="relative text-6xl font-normal text-white cursor-default flex justify-center items-center mt-[2rem]">Find your</h1>
                <h2 className="relative text-8xl font-extrabold text-nyanza cursor-default flex justify-center items-center" style={{fontFamily: "pacifico"}}>community</h2>
                <h1 className="relative text-5xl font-normal text-white cursor-default flex justify-center items-center mt-[3rem]">Support your people</h1>
            </div>

            <div className=" flex justify-center text-xl items-center mx-auto mt-10 pl-2 w-[46rem] h-[10rem] rounded-xl">
                <p>
                    This website was created in order to combine the <span className="text-nyanza-700" style={{fontFamily: "pacifico"}}>best</span> parts of neighborhood social networks. It offers a <span className="text-crystal-700" style={{fontFamily: "pacifico"}}>variety</span> of facitilies that can make community networking much easier and serves as an <span className="text-tan-700" style={{fontFamily: "pacifico"}}>efficient</span> way for providing for your community.
                </p>
            </div>
        </div>
    )
}