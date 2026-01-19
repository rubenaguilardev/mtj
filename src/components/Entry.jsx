const Entry = (props) => {
    return (
        <section className="overflow-hidden p-10">
            <div className="flex gap-5 items-center pb-10 border-b border-[#F5F5F5]">
                <div className="shrink-0" >
                    <img 
                        src={props.image.src}
                        alt={props.image.alt}
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
                        <span className="mr-2">{props.country}</span>
                        <a 
                            className="underline underline-offset-3 text-[#918E9B]"
                            href={props.mapLink}
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <h1 className="text-[1.5625rem] font-bold mb-3">{props.title}</h1>
                    <span className='inline-block font-bold mb-2'>{props.dates}</span>
                    <p className="leading-normal">{props.text}</p>
                </div>
            </div>
           

        </section>
    )
}

export default Entry