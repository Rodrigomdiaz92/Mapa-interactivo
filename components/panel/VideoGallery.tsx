"use client";

interface Props{
    videos:string[];
}

export default function VideoGallery({videos}:Props){

    if(videos.length===0) return null;

    return(

        <section className="mt-8">

            <h3 className="text-xl font-bold mb-4">

                Videos

            </h3>

            <div className="space-y-4">

                {videos.map((video,index)=>(

                    <video
                        key={index}
                        controls
                        preload="metadata"
                        className="
                            w-full
                            rounded-xl
                            shadow-md
                        "
                    >

                        <source src={video} />

                    </video>

                ))}

            </div>

        </section>

    )

}