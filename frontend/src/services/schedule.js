import api from './api';

const scheduleBase = 'schedules';

export const create = async (data) => {
  return api.post(scheduleBase, data);
};
