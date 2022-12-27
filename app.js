//project, add task
document.querySelector('.addBtn').onclick = function () {
    if (document.querySelector('input').value === '') {
        alert('Please enter a task')
    } else {
        (document.querySelector('.tasks').innerHTML
            += `<div class="task">
                <span class="taskName">${document.querySelector('input').value}</span>
                <button class="delete">x</button>
            </div>`)
        //delete task
        let current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        //done task
        let doneTask = document.querySelectorAll('.taskName');
        for (let i = 0; i < doneTask.length; i++) {
            doneTask[i].onclick = function () {
                this.classList.toggle('completed')
            }
        }
        let inputBut = document.querySelectorAll('input[type=text]');
        for (let i = 0; i < inputBut.length; i++) {
            inputBut[i].value = '';
        }
    }
}






let num1;
let num2;
let out = document.getElementById('out');

function plus() {
 num1 = document.getElementById('n1').value;
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)

 out.innerHTML = num1 + num2;
}

function minus() {
 num1 = document.getElementById('n1').value;
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)

 out.innerHTML = num1 - num2;
}

function multiplication() {
 num1 = document.getElementById('n1').value;
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)

 out.innerHTML = num1 * num2;
}

