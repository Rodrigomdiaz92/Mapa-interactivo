"use client";

export default function SearchBar() {

    return (

        <div
            className="
            absolute
            top-5
            left-1/2
            -translate-x-1/2
            z-[1000]
            w-[420px]
            "
        >

            <input

                type="text"

                placeholder="Search an island..."

                className="
w-full
rounded-full
bg-white
shadow-xl
px-5
py-3
outline-none
border
border-gray-300
text-black
placeholder:text-gray-500
"

            />

        </div>

    );

}