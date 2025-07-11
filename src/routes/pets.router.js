import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';

const router = Router();
/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Obtener todas las mascotas
 *     tags:
 *       - Pets
 *     responses:
 *       200:
 *         description: Lista de mascotas
 */
router.get('/',petsController.getAllPets);

/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: Crear una nueva mascota
 *     tags:
 *       - Pets
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - specie
 *               - birthDate
 *             properties:
 *               name:
 *                 type: string
 *                 example: Rocky
 *               specie:
 *                 type: string
 *                 example: Perro
 *               birthDate:
 *                 type: string
 *                 example: 2020-06-01
 *     responses:
 *       200:
 *         description: Mascota creada con éxito
 *       400:
 *         description: Valores incompletos
 */
router.post('/',petsController.createPet);

/**
 * @swagger
 * /api/pets/withimage:
 *   post:
 *     summary: Crear una mascota con imagen
 *     tags:
 *       - Pets
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - specie
 *               - birthDate
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *                 example: Rocky
 *               specie:
 *                 type: string
 *                 example: Gato
 *               birthDate:
 *                 type: string
 *                 example: 2021-04-01
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Mascota creada con imagen
 *       400:
 *         description: Valores incompletos
 */
router.post('/withimage',uploader.single('image'), petsController.createPetWithImage);

/**
 * @swagger
 * /api/pets/{pid}:
 *   put:
 *     summary: Actualizar una mascota
 *     tags:
 *       - Pets
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la mascota a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               name: Luna
 *               specie: Gato
 *     responses:
 *       200:
 *         description: Mascota actualizada con éxito
 */
router.put('/:pid',petsController.updatePet);

/**
 * @swagger
 * /api/pets/{pid}:
 *   delete:
 *     summary: Eliminar una mascota
 *     tags:
 *       - Pets
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la mascota a eliminar
 *     responses:
 *       200:
 *         description: Mascota eliminada
 */
router.delete('/:pid',petsController.deletePet);

export default router;