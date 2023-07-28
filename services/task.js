import { getAll, getById, createTask } from "../models/task.js";

export const getAllTask = async () => {
    const [tasks, field] = await getAll();

    console.log(tasks);
}

export const getTaskById = async (id) => {
    const [task] = await getById(id);

    // console.log(task[0]);
    return task[0];
}

export const addtask = async (name, completed) => {
    const [result] = await createTask(name, completed);
    console.log(`Task berhasil dibuat dengan id : ${result.insertId}`);
}