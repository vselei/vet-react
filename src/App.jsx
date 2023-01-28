import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientsList from './components/PatientsList';

const App = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const [changeLocalStorage, setChangeLocalStorage] = useState(false);

  useEffect(() => {
    const getLocalStorage = () => {
      const lsPatients = JSON.parse(localStorage.getItem('patients')) ?? [];

      setPatients(lsPatients);
    };

    getLocalStorage();
  }, []);

  useEffect(() => {
    if (changeLocalStorage) {
      localStorage.setItem('patients', JSON.stringify(patients));
    }
  }, [changeLocalStorage]);

  const deletePatient = id => {
    const updatedPatients = patients.filter(p => p.id !== id);

    setChangeLocalStorage(true);

    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
          setChangeLocalStorage={setChangeLocalStorage}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
};

export default App;
