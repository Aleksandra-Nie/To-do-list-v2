{
  const tasks = [
    {
      content: "zrobić obiad",
      done: true,
    },
    {
      content: "posprzątać",
      done: false,
    },
  ];

  let hideDoneTask = false;

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  toggleTaskDone = (index) => {
    tasks[index].done = !tasks[index].done;
    render();
  };

  const toggleHideDoneTask = () => {
    hideDoneTask = !hideDoneTask;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, taskIndex) => {
      removeButton.addEventListener("click", () => {
        removeTask(taskIndex);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const renderButton = () => {
    const buttonElements = document.querySelector(".js-buttons");

    if (!tasks.length) {
      buttonElements.innerHTML = "";
      return;
    }

    buttonElements.innerHTML = `
        <button 
            class="button js-toggleHideDoneTasks"
            >
            ${hideDoneTask ? "Wyświetl" : "Ukryj"} ukończone ✓
        </button>
    `;
  };

  const bindButtonEvents = () => {
    const toggleHideDoneTasksButton = document.querySelector(".js-toggleHideDoneTasks");

    if (toggleHideDoneTasksButton) {
      toggleHideDoneTasksButton.addEventListener("click", toggleHideDoneTask);
    }
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
      <li class="list__item${task.done && hideDoneTask ? " list__item--hidden" : ""
        } js-tasks">
       <button class="list__buttonTask list__buttonTask--done js-done">
       ${task.done ? " ✓ " : ""}
       </button>
       <span class="list__content${task.done ? "list__content--done" : ""}">
        ${task.content}
        </span>
        <button class="list__buttonTask list__buttonTask--remove js-remove">🗑</button>
        </li>
        `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
    renderButton();
    bindButtonEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskElement.value = "";
      newTaskElement.focus();
    }
  };

  const resetForm = () => {
    const tasks = document.querySelector(".js-tasks");
    const buttonElements = document.querySelector(".js-buttons");
    tasks.innerHTML = "";
    buttonElements.innerHTML = "";
  };

  const init = () => {
    render();
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
    form.addEventListener("reset", resetForm);
  };

  init();

}
