"use client";

import { Island } from "@/types/island";

interface Props {
  island: Island | null;
  onClose: () => void;
}

export default function SidePanel({
  island,
  onClose,
}: Props) {

  if (!island) return null;

  return (

    <aside
className="
absolute
top-0
right-0
h-full
w-[380px]
bg-white
shadow-2xl
z-[1000]
p-6
overflow-y-auto
text-black
"
>

      <button
        onClick={onClose}
        className="
mb-6
text-black
font-semibold
hover:text-gray-700
transition
"
      >
        ✕ Cerrar
      </button>

      <h2 className="text-3xl font-bold mb-4">
        {island.name}
      </h2>

      <p className="mb-6">
        {island.description}
      </p>

      <h3 className="font-semibold mb-2">
        Activities
      </h3>

      <ul className="list-disc pl-5">

        {island.activities.map(activity => (

          <li key={activity}>
            {activity}
          </li>

        ))}

      </ul>

    </aside>

  );
}