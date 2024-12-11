export default function ToursPage() {
    // Información de las tarjetas de tours
    const tours = [
      {
        label: "Privado",
        src: "http://hotumatur.com/wp-content/uploads/2024/12/amanecertongariki.webp",
        title: "Amanecer en Tongariki",
        description: "Disfruta de un amanecer inolvidable en el icónico Ahu Tongariki.",
        price: "$50 USD",
      },
      {
        label: "Privado",
        src: "http://hotumatur.com/wp-content/uploads/2024/12/orongo.webp",
        title: "Tour Orongo",
        description: "Explora el sitio ceremonial Orongo y descubre su historia.",
        price: "$249 USD",
      },
      {
        label: "Privado",
        src: "http://hotumatur.com/wp-content/uploads/2024/12/ahu-akivi.webp",
        title: "Aventura en Rano Kau",
        description: "Sumérgete en la majestuosidad del volcán Rano Kau.",
        price: "$199 USD",
      },
      {
        label: "Privado",
        src: "http://hotumatur.com/wp-content/uploads/2024/12/anakena.webp",
        title: "Playa Anakena",
        description: "Relájate en la hermosa playa Anakena con sus arenas blancas.",
        price: "$99 USD",
      },
      {
        label: "Privado",
        src: "http://hotumatur.com/wp-content/uploads/2024/12/poike-volcano-view-from.webp",
        title: "Ruta de Moáis",
        description: "Descubre las estatuas más emblemáticas de Isla de Pascua.",
        price: "$219 USD",
      },
      {
        label: "Privado",
        src: "http://hotumatur.com/wp-content/uploads/2024/12/tour2dias.webp",
        title: "Tour Completo",
        description: "Conoce todos los rincones de la isla en un recorrido completo.",
        price: "$399 USD",
      },
    ];
  
    return (
      <div className="bg-gray-100">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[600px]"
          style={{ backgroundImage: "url('http://hotumatur.com/wp-content/uploads/2024/12/anakena.webp')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">Descubre Isla de Pascua</h1>
              <p className="mt-4 text-lg">
                Vive la experiencia única de una de las islas más misteriosas y hermosas del mundo.
              </p>
              <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
                Explorar Paquetes
              </button>
            </div>
          </div>
        </section>
  
        {/* Packages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Paquetes De Turismo Privados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden relative">
                  {/* Etiqueta flotante */}
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg">
                    {tour.label}
                  </div>
                  <img src={tour.src} alt={tour.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{tour.title}</h3>
                    <p className="mt-2 text-gray-600">{tour.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xl font-bold text-yellow-500">{tour.price}</span>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Reservar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Benefits Section */}
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="http://hotumatur.com/wp-content/uploads/2024/12/anakena.webp"
                  alt="Seguridad"
                  className="mx-auto h-16 mb-4"
                />
                <h3 className="text-xl font-bold">Seguridad Garantizada</h3>
                <p className="mt-2 text-gray-600">Disfruta de la tranquilidad en cada tour junto a nuestros guias expertos.</p>
              </div>
              <div className="text-center">
                <img
                  src="http://hotumatur.com/wp-content/uploads/2024/12/anakena.webp"
                  alt="Guías Expertos"
                  className="mx-auto h-16 mb-4"
                />
                <h3 className="text-xl font-bold">Guías Locales</h3>
                <p className="mt-2 text-gray-600">
                  Aprende sobre la historia y cultura de la isla con expertos.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="http://hotumatur.com/wp-content/uploads/2024/12/anakena.webp"
                  alt="Experiencia Cultural"
                  className="mx-auto h-16 mb-4"
                />
                <h3 className="text-xl font-bold">Experiencia Cultural</h3>
                <p className="mt-2 text-gray-600">
                  Vive momentos únicos que te conectarán con la isla.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>© 2024 Isla de Pascua Tours. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    );
  }
  