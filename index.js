/*
    1. tambahkan fungsi delete dengan memasukkan id
    2. tambahkan fungsi get detail task dengan memasukkan id
*/

import readline from 'readline';
import { nanoid } from 'nanoid';

const tasks = [];

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

console.log(`
Task Manager App
================
Pilih perintah berikut: 
1. add
2. list
3. update
`);

rl.on('line', (input) => {
    switch(input) {
        case 'add' :
            addtask();
            break;
        case 'list':
            listTask();
            break;
        case 'update':
            updateTask();
            break;
        default:
            console.log("command not recognized");
            break;
    }
});

function addtask() {
    rl.question('Masukan nama task: ', (name) => {
        rl.question('Sudah selesai? ', (completed) => {
            let task = {
                id: nanoid(6),
                name: name,
                completed: completed
            };
            // task.name = name;
            // task.completed = completed;
            tasks.push(task);
            console.log("task berhasil di tambah");
        });

    })
}

function listTask(){
    console.log(tasks);
}

function updateTask() {
    rl.question('Masukan id task yang ingin di ubah: ', (id) => {
        rl.question('Ubah nama task: ', (name) => {
            rl.question('ubah selesai: ', (completed) => {
                const idx = tasks.findIndex(item => item.id === id);
                if (idx > -1) {
                    tasks[idx] = {
                        id: id, 
                        name: name,
                        completed: completed
                    };
                    console.log('task updated');
                } else {
                    console.log('task not found');
                }
            });
        });
    })
}