import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({
  patients,
  setPatients,
  patient,
  setPatient,
  setChangeLocalStorage
}) => {
  const [petName, setPetName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [discharge, setDischarge] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      const { petName, owner, email, discharge, symptoms } = patient;

      setPetName(petName);
      setOwner(owner);
      setEmail(email);
      setDischarge(discharge);
      setSymptoms(symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const discharge = Date.now().toString(36);

    return random + discharge;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if ([petName, owner, email, discharge, symptoms].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    const newPatient = {
      petName,
      owner,
      email,
      discharge,
      symptoms
    };

    if (patient.id) {
      // Sign up edition
      newPatient.id = patient.id;

      const updatedPatients = patients.map(p =>
        p.id === patient.id ? newPatient : p
      );

      setPatients(updatedPatients);
      setChangeLocalStorage(true);
      setPatient({});
    } else {
      // New sign up
      newPatient.id = generateId();
      setPatients([...patients, newPatient]);
      setChangeLocalStorage(true);
    }

    // Restarting the form
    setPetName('');
    setOwner('');
    setEmail('');
    setDischarge('');
    setSymptoms('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Acompanhamento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Adicionar Pacientes e{' '}
        <span className="text-indigo-600 font-bold ">Administração</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error>Todos os campos são obrigatórios</Error>}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Nome do Pet
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Nome do mascote"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petName}
            onChange={e => setPetName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nome do Dono
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nome do proprietário"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de contato do proprietário"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="discharge"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="discharge"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={discharge}
            onChange={e => setDischarge(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="symptom"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descreva os sintomas"
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          value={patient.id ? 'Editar paciente' : 'Adicionar paciente'}
        />
      </form>
    </div>
  );
};

export default Form;
