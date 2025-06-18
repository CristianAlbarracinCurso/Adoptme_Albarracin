import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const generateUsers = async (count = 1) => {
  const passwordHashed = await hashPassword('coder123');
  const users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 60 }),
      password: passwordHashed,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    });
  }

  return users;
};
