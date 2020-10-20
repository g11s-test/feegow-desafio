import React, { useEffect, useState } from 'react';
import { allSpecialties, getProfessionals } from '../../services/feegow';

// Components
import BtnGreen from '../../components/BtnGreen';
import ListProfessional from '../../components/ListProfessional';
import ContactProfessional from '../../components/ContactProfessional';

import './styles.css';

const Dashboard = () => {
  const [professionalId, setProfessionalId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [specialties, setSpecialties] = useState([]);
  const [selectedSpecialtyId, setSeletedSpecialtyId] = useState(null);
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    async function getSpecialties() {
      const fetchSpecialties = await allSpecialties();

      setSpecialties(fetchSpecialties.data.data);
      setLoading(false);
    }

    getSpecialties();
  }, []);

  const selectSpecialty = (e) => {
    const position = e.target.value;
    const specialty = specialties[position];
    const { especialidade_id } = specialty;

    setSeletedSpecialtyId(especialidade_id);
  };

  const btnSchedule = async () => {
    if (selectedSpecialtyId) {
      setLoading(true);

      const fetchProfessionals = await getProfessionals(selectedSpecialtyId);

      setProfessionals(fetchProfessionals.data.data);
      setProfessionalId(0);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="app-header py-3 mb-4">
        <div className="app-header-box container">
          <div className="row">
            <div className="col-xl-2 col-lg-3 d-flex justify-content-lg-start justify-content-center mb-2 mb-lg-0">
              <div className="app-header-title">Consulta de</div>
            </div>
            <div className="col-xl-8 col-lg-7 d-flex justify-content-lg-start justify-content-center mb-3 mb-lg-0">
              <select
                name="specialties"
                id="specialties"
                className="form-control"
                onChange={(e) => selectSpecialty(e)}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled>
                  Selecione a especialidade
                </option>
                {specialties.map((specialty, index) => (
                  <option key={specialty.especialidade_id} value={index}>
                    {specialty.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-xl-2 col-lg-2 justify-content-xl-start justify-content-center d-flex">
              <BtnGreen value="AGENDAR" fn={btnSchedule} />
            </div>
          </div>
        </div>
      </div>
      {professionalId === 0 ? (
        <ListProfessional
          loading={loading}
          setProfessionalId={(value) => setProfessionalId(value)}
          professionals={professionals}
        />
      ) : (
        <ContactProfessional
          specialty_id={selectedSpecialtyId}
          professional_id={professionalId}
          setProfessionalId={setProfessionalId}
        />
      )}
    </>
  );
};

export default Dashboard;
