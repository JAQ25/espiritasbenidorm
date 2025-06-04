import { useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: {
      title: "Bienvenidos a la Asociación Espírita Luz Divina",
      content: (
        <div>
          <p className="text-lg mb-6 text-gray-700">
            Somos una comunidad dedicada a la enseñanza y práctica del Espiritismo según los principios de Allan Kardec.
            ¡Te invitamos a caminar juntos hacia la luz!
          </p>
          <h3 className="text-xl font-semibold mb-4">Próximos eventos</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <EventCard
              title="Conferencia: El Amor Verdadero"
              date="15 de mayo, 2025 - 19:00 hrs"
              description="Explorando cómo el amor transforma nuestras vidas desde el Espiritismo."
            />
            <EventCard
              title="Taller: Diálogo con el Más Allá"
              date="22 de mayo, 2025 - 18:30 hrs"
              description="Un espacio seguro para reflexionar sobre la comunicación con nuestros seres queridos fallecidos."
            />
          </div>
        </div>
      ),
    },
    about: {
      title: "Sobre Nosotros",
      content: (
        <div>
          <p className="mb-4 text-gray-700">
            La Asociación Espírita Luz Divina fue fundada en 2010 con el objetivo de difundir los principios del Espiritismo,
            promoviendo la caridad, el estudio y la evolución moral.
          </p>
          <p className="mb-4 text-gray-700">
            Nuestra misión es guiar a las personas en su camino espiritual mediante conferencias, talleres y servicios
            fraternales.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Misión:</strong> Promover el conocimiento y práctica del Espiritismo.</li>
            <li><strong>Visión:</strong> Ser una luz en el camino de quienes buscan crecimiento espiritual.</li>
            <li><strong>Valores:</strong> Caridad, respeto, humildad, servicio y amor al prójimo.</li>
          </ul>
        </div>
      ),
    },
    activities: {
      title: "Nuestras Actividades",
      content: (
        <div>
          <p className="mb-4 text-gray-700">
            Ofrecemos una variedad de actividades semanales y mensuales para todos los interesados en el Espiritismo.
          </p>
          <ul className="space-y-4">
            <ActivityItem
              title="Reuniones Semanales"
              time="Martes y Jueves - 19:00 hrs"
              description="Estudio del Evangelio según el Espiritismo."
            />
            <ActivityItem
              title="Sesiones de Oración y Meditación"
              time="Domingo - 10:00 hrs"
              description="Espacio de conexión interior y comunión espiritual."
            />
            <ActivityItem
              title="Charlas Públicas"
              time="Cada último sábado del mes - 16:00 hrs"
              description="Conferencias abiertas sobre temas doctrinales y vida espiritual."
            />
          </ul>
        </div>
      ),
    },
    doctrine: {
      title: "¿Qué es el Espiritismo?",
      content: (
        <div>
          <p className="mb-4 text-gray-700">
            El Espiritismo es una ciencia que estudia la naturaleza, origen y destino de los Espíritus, así como sus relaciones con el mundo corporal.
          </p>
          <p className="mb-4 text-gray-700">
            Según Allan Kardec, codificador del Espiritismo, esta doctrina se basa en tres pilares fundamentales:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>La existencia de Dios.</strong></li>
            <li><strong>La inmortalidad del alma.</strong></li>
            <li><strong>La reencarnación y la ley de causa y efecto (ley de causa y efecto).</strong></li>
          </ul>
          <blockquote className="border-l-4 border-green-500 pl-4 italic mt-4 text-gray-600">
            “La caridad es el signo más seguro de la regeneración.” – Allan Kardec
          </blockquote>
        </div>
      ),
    },
    contact: {
      title: "Contáctanos",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            ¿Tienes dudas o deseas saber más sobre nuestra asociación? ¡Escríbenos!
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Tu nombre" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Tu correo electrónico" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Tu mensaje" rows="4" className="w-full p-3 border rounded-md"></textarea>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition">
              Enviar Mensaje
            </button>
          </form>
          <div className="mt-6 text-gray-700">
            <p><strong>Dirección:</strong> Calle Espíritu Santo #123, Ciudad Luz</p>
            <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
            <p><strong>Email:</strong> info@luzdivina.org</p>
            <p><strong>Redes Sociales:</strong> @LuzDivinaAsociacion</p>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Luz Divina</h1>
          <nav className="space-x-4 hidden md:block">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`capitalize transition hover:text-green-200 ${
                  activeSection === key ? "text-green-200 font-semibold" : ""
                }`}
              >
                {key === "home" ? "Inicio" : key === "about" ? "Nosotros" : key === "activities" ? "Actividades" : key === "doctrine" ? "Doctrina" : "Contacto"}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden bg-green-600 text-white p-2 overflow-x-auto">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`px-4 py-2 capitalize whitespace-nowrap ${
              activeSection === key ? "font-bold underline" : ""
            }`}
          >
            {key === "home" ? "Inicio" : key === "about" ? "Nosotros" : key === "activities" ? "Actividades" : key === "doctrine" ? "Doctrina" : "Contacto"}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-green-800">{sections[activeSection].title}</h2>
        <div className="prose max-w-none animate-fadeIn">
          {sections[activeSection].content}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Asociación Espírita Luz Divina | Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Promoviendo el amor, la caridad y el crecimiento espiritual.</p>
        </div>
      </footer>
    </div>
  );
}

// Componente para tarjetas de evento
function EventCard({ title, date, description }) {
  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-green-700">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
}

// Componente para actividades
function ActivityItem({ title, time, description }) {
  return (
    <li className="bg-white p-4 rounded-md shadow">
      <h3 className="font-semibold text-green-700">{title}</h3>
      <p className="text-sm text-gray-500">{time}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </li>
  );
}