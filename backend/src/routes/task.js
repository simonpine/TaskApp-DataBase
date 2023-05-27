import { Router } from "express";

import {saveTask, deleteTask, getTask, getTasks, getTasksCount, updateTasks} from '../controllers/task'

const router = Router()

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 */
router.get('/tasks', getTasks)
/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get all task counter
 */
router.get('/tasks/count', getTasksCount)
/**
 * @swagger
 * /task/:id:
 *  get:
 *      summary: Get a task by id
 */
router.get('/task/:id', getTask)
/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Save a new task
 */
router.post('/tasks', saveTask)
/**
 * @swagger
 * /task/:id:
 *  delete:
 *      summary: Delete a task by id
 */
router.delete('/task/:id', deleteTask)
/**
 * @swagger
 * /task/:id:
 *  put:
 *      summary: Update a task by id
 */
router.put('/task/:id', updateTasks)


export default router