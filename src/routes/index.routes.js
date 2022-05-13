import { Router } from 'express'; //importamos el enrutador de express
import { renderTasks, createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone } from "../controllers/tasks.controller"

const router = Router()

//Ver las tareas
router.get("/", renderTasks);

//Guardar las tareas
router.post("/tasks/add", createTask);

//Obtener tarea a editar
router.get("/tasks/:id/edit", renderTaskEdit);

//Editar la tarea
router.post("/tasks/:id/edit", editTask);

//Eliminar las tareas
router.get('/tasks/:id/delete', deleteTask)

//Done tasks
router.get('/tasks/:id/toggleDone', taskToggleDone)

export default router;