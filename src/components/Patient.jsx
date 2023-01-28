const Patient = ({ patient, setPatient, deletePatient }) => {
  const { petName, owner, email, discharge, symptoms, id } = patient;

  const handleDelete = () =>
    confirm('Deseja excluir esse paciente?') && deletePatient(id);

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nome: <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dono: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: <span className="font-normal normal-case">{discharge}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex flex-wrap gap-3 justify-center lg:justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 transition-colors hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 transition-colors hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={handleDelete}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Patient;
