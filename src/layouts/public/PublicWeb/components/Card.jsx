export const Card = ({ obra }) => {
  return (
    <>
      <div className="bg-white grid grid-rows-2 rounded shadow opacity-80 hover:opacity-100">
        <div className="p-4">
          <img src={obra.img_url} alt="" className="mx-auto object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <p className="text-3xl capitalize">{obra.titulo}</p>
            <p>{obra.categoria}</p>
          </div>
          <p className="text-white bg-violet-900 hover:bg-violet-950 font-medium rounded-lg text-md py-2 text-center cursor-pointer">
            Ver
          </p>
        </div>
      </div>
    </>
  );
};
