import { getAll, getById, createTask } from "../models/task.js";

export const getAllTask = () => {
    const tasks = getAll();

    console.log(tasks);
}

export const getTaskById = (id) => {
    const task = getById(id);

    console.log(task);
}

export const addtask = (name, completed) => {
    const id = createTask(name, completed);

    console.log(`Task berhasil dibuat dengan id : ${id}`);
}