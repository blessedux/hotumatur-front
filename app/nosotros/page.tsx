export default function NosotrosPage() {
    return (
      <div className="bg-gray-100">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[400px]"
          style={{ backgroundImage: "url('http://hotumatur.com/wp-content/uploads/2024/12/amanecertongariki.webp')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">Sobre Nosotros</h1>
              <p className="mt-4 text-lg">
                Conoce más sobre nuestra misión, visión y valores en Hotumatur.
              </p>
            </div>
          </div>
        </section>
  
        {/* Mission and Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestra Misión y Visión</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Misión</h3>
                <p className="text-gray-600">
                  En Hotumatur, nos comprometemos a transformar cada visita a Rapa Nui en una
                  experiencia inolvidable, ofreciendo tours personalizados y compartiendo la
                  historia ancestral de la isla.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Visión</h3>
                <p className="text-gray-600">
                  Aspiramos a ser la agencia líder en turismo en Rapa Nui, destacándonos por nuestra
                  excelencia en servicio y compromiso con la cultura local.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Valores Section */}
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="http://hotumatur.com/wp-content/uploads/2024/12/amanecertongariki.webp" alt="Cultura" className="mx-auto h-16 mb-4" />
                <h3 className="text-xl font-semibold">Respeto por la Cultura</h3>
                <p className="text-gray-600">
                  Preservamos y compartimos las tradiciones ancestrales de Rapa Nui.
                </p>
              </div>
              <div className="text-center">
                <img src="http://hotumatur.com/wp-content/uploads/2024/12/amanecertongariki.webp" alt="Seguridad" className="mx-auto h-16 mb-4" />
                <h3 className="text-xl font-semibold">Seguridad</h3>
                <p className="text-gray-600">
                  Garantizamos la seguridad y tranquilidad de nuestros clientes en cada tour.
                </p>
              </div>
              <div className="text-center">
                <img src="http://hotumatur.com/wp-content/uploads/2024/12/amanecertongariki.webp" alt="Experiencia" className="mx-auto h-16 mb-4" />
                <h3 className="text-xl font-semibold">Excelencia</h3>
                <p className="text-gray-600">
                  Nos esforzamos por superar las expectativas en cada experiencia.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="http://hotumatur.com/wp-content/uploads/2024/12/amanecertongariki.webp"
                  alt="Miembro del Equipo"
                  className="mx-auto rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">Josue Valenzuela</h3>
                <p className="text-gray-600">Guia Experto</p>
              </div>
              <div className="text-center">
                <img
                  src="http://hotumatur.com/wp-content/uploads/2024/12/amanecertongariki.webp"
                  alt="Miembro del Equipo"
                  className="mx-auto rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">Juan Benitez</h3>
                <p className="text-gray-600">Guía Experto</p>
              </div>
              <div className="text-center">
                <img
                  src="http://hotumatur.com/wp-content/uploads/2024/12/amanecertongariki.webp"
                  alt="Miembro del Equipo"
                  className="mx-auto rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">Jorge harald</h3>
                <p className="text-gray-600">Coordinador de Tours</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para descubrir Rapa Nui con nosotros?</h2>
            <p className="text-gray-600 mb-8">
              Contáctanos para reservar tu experiencia única en Isla de Pascua.
            </p>
            <div>
                <a href="/contacto">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              Contáctanos
            </button>
            </a>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>© 2024 Hotumatur Agencia de Turismo. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    );
  }
  