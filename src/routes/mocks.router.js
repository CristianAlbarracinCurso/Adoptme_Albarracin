import { Router } from 'express';
import { faker } from '@faker-js/faker';
import { generateUsers } from '../utils/mocking.utils.js';
import UserModel from '../dao/models/User.js';
import PetModel from '../dao/models/Pet.js';

const router = Router();

// GET /api/mocks/mockingpets
router.get('/mockingpets', (req, res) => {
  const pets = [];

  for (let i = 0; i < 100; i++) {
    pets.push({
      name: faker.animal.cat(),
      specie: faker.animal.type(),
      birthDate: faker.date.past(),
      adopted: faker.datatype.boolean(),
    });
  }

  res.json(pets);
});

// GET /api/mocks/mockingusers?total=50
router.get('/mockingusers', async (req, res) => {
  try {
    const total = parseInt(req.query.total) || 50;
    const users = await generateUsers(total);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al generar usuarios mockeados' });
  }
});

// POST /api/mocks/generateData
router.post('/generateData', async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const mockUsers = await generateUsers(users);
    await UserModel.insertMany(mockUsers);

    const mockPets = [];

    for (let i = 0; i < pets; i++) {
      mockPets.push({
        name: faker.animal.cat(),
        specie: faker.animal.type(),
        birthDate: faker.date.past(),
        adopted: faker.datatype.boolean(),
      });
    }

    await PetModel.insertMany(mockPets);

    res.status(201).json({
      message: `Se generaron ${users} usuarios y ${pets} mascotas en la base de datos.`,
    });
  } catch (err) {
    res.status(500).json({ error: 'Error al insertar datos mockeados' });
  }
});

export default router;
