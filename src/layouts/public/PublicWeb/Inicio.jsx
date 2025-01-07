import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <section className="bg-cover bg-no-repeat bg-[url('https://picsum.photos/1600')] bg-slate-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Caminos hacia la Inclusión
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
            Este concurso invita a artistas de todas las edades a presentar
            obras que promuevan la inclusión en sus múltiples formas. Desde la
            integración de personas con discapacidades, la aceptación de la
            diversidad cultural, étnica y lingüística, hasta la representación
            de comunidades marginadas. Las obras deben transmitir un mensaje
            positivo sobre cómo construir una sociedad más inclusiva y
            respetuosa.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <p
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 cursor-pointer"
            >
              <Link to="/galeria"> Ver Obras </Link>
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1>Obras Destacadas</h1>
      </section>
    </>
  );
};
