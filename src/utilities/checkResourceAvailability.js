import { ResourceNotFoundException } from './exceptions';

const checkResourceAvailability = async (id, data, message) => {
  if (!data) {
    return Promise.reject(new ResourceNotFoundException(`${message} no longer exist ${id}`));
  }

  return Promise.resolve();
};

export default checkResourceAvailability;
