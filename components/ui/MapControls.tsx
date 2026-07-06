"use client";

export default function MapControls() {

    return (

        <div

            className="
            absolute
            bottom-6
            left-6
            z-[1000]
            flex
            flex-col
            gap-3
            "

        >

            <button className="
w-12
h-12
rounded-xl
bg-white
shadow-lg
text-xl
text-black
hover:bg-gray-100
transition
">

                +

            </button>

            <button className="
w-12
h-12
rounded-xl
bg-white
shadow-lg
text-xl
text-black
hover:bg-gray-100
transition
">

                -

            </button>

            <button className="
w-12
h-12
rounded-xl
bg-white
shadow-lg
text-xl
text-black
hover:bg-gray-100
transition
">

                Home

            </button>

        </div>

    );

}