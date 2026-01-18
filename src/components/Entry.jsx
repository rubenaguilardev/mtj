const Entry = () => {
    return (
        <section className="overflow-hidden p-10">
            <div className="flex gap-5 items-center">
                <div className="shrink-0" >
                    <img 
                        src="https://scrimba.com/links/travel-journal-japan-image-url" 
                        alt="photo of mount fuji" 
                        className="w-31.25 h-42 object-cover rounded-md"
                    />
                </div>
                <div className="text-[.64rem]">
                    <div className="flex gap-1 items-center text-[.64rem] mb-1">
                        <img 
                            src="/location.png" 
                            alt="location icon"
                            className="w-2 h-3" 
                        />
                        <span className="mr-2">JAPAN</span>
                        <a 
                            className="underline underline-offset-3 text-[#918E9B]"
                            href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <h1 className="text-[1.5625rem] font-bold mb-4">Mount Fuji</h1>
                    <span className='inline-block font-bold mb-2'>12 Jan, 2023 - 24 Jan, 2023</span>
                    <p className="leading-normal">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
           

        </section>
    )
}

export default Entry