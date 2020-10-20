import React, { useState, useEffect } from 'react';
import { allSources } from '../../services/feegow';
import { create } from '../../services/schedule';

import './styles.css';
import BtnGreen from '../BtnGreen';

const ContactProfessional = ({
  specialty_id,
  professional_id,
  setProfessionalId,
}) => {
  const [data, setData] = useState({
    specialty_id,
    professional_id,
    date_time: '2016-01-01 00:00:00',
  });

  const [sources, setSources] = useState([]);

  const [errors, setErrors] = useState([]);

  const [finish, setFinish] = useState(0);

  console.log(specialty_id);

  useEffect(() => {
    const getSources = async () => {
      const fetchSources = await allSources();

      setSources(fetchSources.data.data);
    };

    getSources();
  }, []);

  const changeInput = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const createSchedule = async () => {
    try {
      await create(data);
      setFinish(1);
    } catch (e) {
      setErrors(Object.values(e.response.data));
    }
  };

  const back = () => {
    setProfessionalId(0);
    setFinish(0);
  };

  const renderFinish = () => {
    return (
      <div>
        <h3 className="mb-3">Email enviado com sucesso!</h3>
        <BtnGreen fn={() => back()} value="Voltar" />
      </div>
    );
  };

  const renderContact = () => {
    return (
      <>
        {errors.length > 0 && (
          <div class="alert alert-danger alert-dismissible fade show">
            <strong>Erros encontrados!</strong>
            {errors.map((err) => (
              <div>{err[0]}</div>
            ))}
            <button type="button" class="close" data-dismiss="alert">
              &times;
            </button>
          </div>
        )}
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Nome completo"
              name="name"
              onChange={(e) => changeInput(e)}
              required
            />
          </div>
          <div className="col">
            <select
              id="inputState"
              className="form-control"
              defaultValue={'DEFAULT'}
              name="source_id"
              onChange={(e) => changeInput(e)}
              required
            >
              <option value="DEFAULT" disabled>
                Como conheceu?
              </option>
              {sources.map((source) => (
                <option key={source.origem_id} value={source.origem_id}>
                  {source.nome_origem}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Nascimento"
              name="birthdate"
              onChange={(e) => changeInput(e)}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="cpf"
              placeholder="CPF"
              onChange={(e) => changeInput(e)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={() => createSchedule()}
          className="btn-feegow py-2 px-4 mt-4"
        >
          SOLICITAR HORÁRIOS
        </button>
      </>
    );
  };

  return (
    <div className="container position-relative">
      {finish ? renderFinish() : renderContact()}
    </div>
  );
};

export default ContactProfessional;
