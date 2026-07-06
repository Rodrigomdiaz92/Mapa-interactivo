import InteractiveMap from "@/components/map/InteractiveMap";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col">

      <header className="h-16 flex items-center justify-between px-6 bg-white shadow-md z-10">

        <div>
          <h1 className="text-2xl font-bold text-black">
            Sailing The World
          </h1>

          <p className="text-sm text-gray-600">
            Interactive Map - Guna Yala
          </p>
        </div>

      </header>

      <section className="flex-1 overflow-hidden">

        <InteractiveMap />

      </section>

    </main>
  );
}