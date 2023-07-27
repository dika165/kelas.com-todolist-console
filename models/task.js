import dbPool from "../utils/db.js";

const getAll = async () => {
    const sql = "SELECT id, name, completed FROM tasks";
    const [result] = await dbPool.query(sql);

    return result;
}

const getById = async (id) => {
    const sql = "SELECT * FROM tasks WHERE id = ?";
    const value = [id];
    const [result] = await dbPool.query(sql, value);

    return result[0];
}

const createTask = async (name, completed) => {
    const sql = "INSERT INTO tasks (name, completed) VALUE (?, ?)";
    const value = [name, completed];
    const [result] = await dbPool.query(sql, value)

    return result.insertId;
}

export {getAll, getById, createTask }