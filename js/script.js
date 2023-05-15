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

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="list__item js-tasks">
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

  const init = () => {
    render();
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();

}
