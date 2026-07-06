import InteractiveMap from "@/components/layout/map/InteractiveMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">

      <header className="p-8">

        <h1 className="text-5xl font-bold">
          Sailing The World
        </h1>

        <p className="text-slate-600 mt-2">
          Explore Guna Yala
        </p>

      </header>

      <section className="px-8 pb-8">

        <InteractiveMap />

      </section>

    </main>
  );
}