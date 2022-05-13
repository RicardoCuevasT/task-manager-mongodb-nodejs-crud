import Task from '../models/Task';

//Visualizar tareas
export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean() //Hacemos la consulta al modelo con la función find para que nos traiga todas las tareas. Lean es para devolder lista de objetos tipocos para poder recorrerla sin ningun problema, en vez de devolver objetos de mongodb, ahora devuelve objetos de js
  res.render('index', {tasks: tasks}); //le pasamos el objeto {}, dentro del objeto hay una propiedad llamada tareas, el cuál su valor son las tareas de la db
};


//Añadir nueva tarea
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body)
    await task.save()
    res.redirect("/");
    
  } catch (error) {
    console.log(error)
  }
};

//Obtener la tarea a editar
export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render('edit', { task });
  } catch (error) {
    console.log(error.menssage);
  }
};

//Editar tarea
export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body)
  res.redirect('/');
};

//Eliminar la tarea
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id)
  res.redirect('/');
};

//Marcar las tareas como hechas
export const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  //await Task.findByIdAndUpdate(id, { done: !req.body.done });
  const task = await Task.findById(id);
  task.done = !task.done
  await task.save();
  res.redirect('/')
};