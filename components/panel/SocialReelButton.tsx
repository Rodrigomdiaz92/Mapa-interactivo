interface Props{

    url:string;

}

export default function SocialReelButton({url}:Props){

    if(!url) return null;

    return(

        <section className="mt-8">

            <a

                href={url}

                target="_blank"

                rel="noopener noreferrer"

                className="
                    w-full
                    flex
                    justify-center
                    items-center
                    rounded-xl
                    bg-gradient-to-r
                    from-pink-500
                    to-orange-500
                    text-white
                    py-3
                    font-semibold
                    hover:opacity-90
                    transition
                "

            >

                📱 View Instagram Reel

            </a>

        </section>

    )

}