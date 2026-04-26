export function BCCastSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-light tracking-widest uppercase text-teal-900">
          BC CAST
        </h2>
        <h3 className="text-4xl font-bold text-teal-900 mt-2 mb-12 uppercase">
          Insights valiosos sobre energia e muito mais em nosso Podcast
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/vVnokGbhNPk?si=biv7wFIJmjQnLAll"
              title="BC Cast Episódio 01"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/RrcOwWEAoDY?si=TC1w4EdKkZ0cuJpD"
              title="BC Cast Episódio 02"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
