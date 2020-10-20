import api from './api';

const feegowBase = 'feegow';

export const allSpecialties = async () => {
  return api.get(`${feegowBase}/specialties/list`);
};

export const allSources = async () => {
  return api.get(`${feegowBase}/sources/list`);
};

export const getProfessionals = async (specialtyId = null) => {
  let url = `${feegowBase}/professionals/list?ativo=1`;

  if (specialtyId) {
    url += `&especialidade_id=${specialtyId}`;
  }

  return api.get(url);
};
