const form = document.getElementById("form");
const taskList = document.getElementById("task-list");
let taskItems = Array.from(taskList.querySelectorAll('#task-item'));

const addTask = (e) => {
  e.preventDefault();

  const taskNameInput = document.getElementById("input");
  const taskName = taskNameInput.value.trim();

  if (taskName === "") {
    alert("Task cannot be empty. Please enter a task.");
    return;
  }
  const newTask = document.createElement("li");

  newTask.innerHTML = `
  <li id="task-item" class="flex justify-between items-center border p-2">
  <p class="p-2 border border-gray-300 " contentEditable="true">
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
  taskItems = Array.from(taskList.querySelectorAll('#task-item'));
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
//     const paragraph = listItem.querySelector("p");

//     paragraph.contentEditable = true;
//     paragraph.focus();

//     paragraph.addEventListener("blur", () => {
//       if (paragraph.value === "") {
//         alert("Task cannot be empty. Please enter a task.");
//         setTimeout(() => {
//           paragraph.focus();
//         }, 0);
//       }
//       else {
//         paragraph.blur();
//         paragraph.contentEditable = false;
//       }
//     });
//   }
// };

// taskItems.forEach(taskItem => {
//   const paragraph = taskItem.querySelector('p');
//   paragraph.contentEditable = true;
// });


form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
// taskList.addEventListener("click", editTask);
