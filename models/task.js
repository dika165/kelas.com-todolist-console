import dbPool from "../utils/db.js";

const getAll = () => {
    const sql = "SELECT id, name, completed FROM tasks";
    const result = dbPool.query(sql);

    return result;
}

const getById = (id) => {
    const sql = "SELECT * FROM tasks WHERE id = ?";
    const value = [id];
    const result = dbPool.query(sql, value);

    return result;
}

const createTask = (name, completed) => {
    const sql = "INSERT INTO tasks (name, completed) VALUE (?, ?)";
    const value = [name, completed];
    const result = dbPool.query(sql, value)

    return result;
}

export {getAll, getById, createTask }