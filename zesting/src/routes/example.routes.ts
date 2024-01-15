import { Request, Response, Router } from "express";

const route = Router();

route.get("/", (req: Request, res: Response) => {
  /* #swagger.tags = ['example'] #swagger.description = 'Estoy testiando con este para ver los parametros y respuestas' */
  /* #swagger.parameters['body'] = { in: 'body', description: 'Add new user.', schema: { $ref: '#/definitions/example' }} */
  /* #swagger.responses[202] = { description: 'Get a specific user.', schema: { $ref: '#/definitions/example' }} */
  res.status(200).json({ msg: 'traer tareas test' })
});

route.get('/count', (req: Request,res: Response)=> {
  /* #swagger.tags = ['example'] 
      #swagger.description = 'Endpoint to sign in a specific user' */
  res.send('contar tareas test')
});

route.post("/tasks", (req: Request,res: Response) => {
  /* #swagger.tags = ['example'] 
      #swagger.description = 'Endpoint to sign in a specific user' */
  res.send("crear tareas test")
});

route.get("/tasks/:id", (req: Request,res: Response) => {
  /* #swagger.tags = ['example'] 
      #swagger.description = 'Endpoint to sign in a specific user' */
  res.send("traer 1 tarea test")
});

route.delete("/tasks/:id", (req: Request,res: Response)=> {
  /* #swagger.tags = ['example'] 
      #swagger.description = 'Endpoint to sign in a specific user' */
  res.send('eliminar tarea test')
});

route.put("/tasks/:id", (req: Request,res: Response)=> {
  /* #swagger.tags = ['example'] 
      #swagger.description = 'Endpoint to sign in a specific user' */
  res.send('actualizar tarea test')
});

export default route;
