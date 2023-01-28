import Patient from './Patient';

const PatientsList = ({ patients, setPatient, deletePatient }) => (
  <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
    {patients && patients.length ? (
      <>
        <h2 className="font-black text-3xl text-center">Pacientes Listados</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administrar seus{' '}
          <span className="text-indigo-600 font-bold">Pacientes</span>
        </p>
        {patients.map(patient => (
          <Patient
            key={patient.id}
            patient={patient}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
        ))}
      </>
    ) : (
      <>
        <h2 className="font-black text-3xl text-center">Não tem Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comece a Adicionar{' '}
          <span className="text-indigo-600 font-bold">Pacientes</span>
        </p>
      </>
    )}
  </div>
);

export default PatientsList;
