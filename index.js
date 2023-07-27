/*
    1. tambahkan fungsi delete dengan memasukkan id
    2. tambahkan fungsi get detail task dengan memasukkan id
*/

import readline from 'readline';
import * as TaskService from './services/task.js';

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
3. detail
`);

rl.on('line', (input) => {
    switch(input) {
        case 'add' :
            addtask();
            break;
        case 'list':
            listTask();
            break;
        case 'detail':
            getById();
            break;
        default:
            console.log("command not recognized");
            break;
    }
});

function addtask() {
    rl.question('Masukan nama task: ', (name) => {
        rl.question('Sudah selesai? ', (completed) => {
            TaskService.addtask(name, completed);
        });

    })
}

function listTask(){
    TaskService.getAllTask();
}

function getById(){
    rl.question('Masukan id task yang ingin dilihat',(id)=>{
        const task = TaskService.getTaskById(id);

        console.log(task);
    } )
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