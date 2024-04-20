const form = document.getElementById("form");
const taskList = document.getElementById("task-list");

const addTask = (e) => {
  e.preventDefault();

  const taskNameInput = document.getElementById("input");
  const taskName = taskNameInput.value.trim();

  if (taskName === "") {
    alert("Task is empty");
    return;
  }
  const newTask = document.createElement("li");

  newTask.innerHTML = `
  <li id="task-item" class="flex justify-between items-center border p-2">
  <p>
    ${taskName}
  </p>
  <div>
    <button id="task-edit" type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
    <button id="task-delete" type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
  </div>
</li>
  `;
  taskList.insertAdjacentElement("afterbegin", newTask);
  taskNameInput.value = "";
};

const deleteTask = (e) => {
  if (e.target.id === "task-delete") {
    const listItem = e.target.closest("li");
    const confirmation = confirm("Are you sure you want to delete this task?");
    if (confirmation) {
      listItem.remove();
    }
  }
};

// const editTask = (e) => {
//   if (e.target.id === "task-edit") {
//     const listItem = e.target.closest("li");
//     const paragraph = listItem.querySelector('p');
//     console.log(paragraph);

//     const newTask = prompt("Edit the task:", paragraph.textContent);

//     if (newTask !== null) {
//       paragraph.textContent = newTask;
//     }
//   }
// };
const editTask = (e) => {
  if (e.target.id === "task-edit") {
    const listItem = e.target.closest("li");
    const paragraph = listItem.querySelector("p");

    const input = document.createElement("input");
    input.type = "text";
    input.value = paragraph.textContent;

    listItem.replaceChild(input, paragraph);

    input.focus();

    input.addEventListener("blur", () => {
      const newParagraph = document.createElement("p");
      newParagraph.textContent = input.value;
      listItem.replaceChild(newParagraph, input);
    });
  }
};

form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", editTask);

// const form = document.getElementById('form')
// const taskList = document.getElementById('task-list')

// const addTask = (e) => {
//   e.preventDefault()
//   const formData = new FormData(form);
//   const formEntries = Object.fromEntries(formData)
//   console.log(formEntries);
//   const task = document.createElement('li')
//   if(formEntries['task'] === "") {
//     alert("Task is empty")
//     return
//   }
//   task.innerHTML = `
//     <li id="task-item" class="flex justify-between items-center border p-2 mb-2">
//       <p>
//         ${formEntries['task']}
//       </p>
//       <div>
//         <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
//         <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
//       </div>
//     </li>
//   `
//   taskList.insertAdjacentElement('afterbegin', task)
//   form.reset()
// }

// form.addEventListener('submit', addTask)

// const allTask = document.querySelectorAll('#task-item #task-delete')
// allTask.forEach((node) => {
//   const taskDelete = document.getElementById('task-delete')
//   node.addEventListener('click', (e) => {
//     console.log("dd");
//     e.currentTarget.parentNode.parentNode.remove();
//   })
// })
