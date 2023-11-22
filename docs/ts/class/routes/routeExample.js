export const createRouteExample = () => {
  const data = `import { Request, Response, Router } from "express";

const route = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        name:
 *          type: string
 *          description: the name of the task
 *        description:
 *          type: string
 *          description: the description of the task
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: My first Task
 *        description: I have to do Something
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found task
 *      example:
 *        msg: Task was not found
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
*/

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
*/

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Returns a list of tasks
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the list of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
*/
route.get("/", (req: Request, res: Response) => res.json({ msg: 'traer tareas test' }));

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get a task by Id
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the total number of tasks
 *        content:
 *          text/plain:
 *            schema:
 *              type: integer
 *              example: 15
 *
*/
route.get('/count', (req: Request,res: Response)=> res.send('contar tareas test'));

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: create a new task
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: the tasks was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Some server error
 *
*/
route.post("/tasks", (req: Request,res: Response) => res.send("crear tareas test"));

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: get a task by Id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: The Found Task
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 */
route.get("/tasks/:id", (req: Request,res: Response) => res.send("traer 1 tarea test"));

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: the task was deleted
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
route.delete("/tasks/:id", (req: Request,res: Response)=> res.send('eliminar tarea test'));

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The updated task 
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
route.put("/tasks/:id", (req: Request,res: Response)=> res.send('actualizar tarea test'));

export default route;
`;

  return data;
};
