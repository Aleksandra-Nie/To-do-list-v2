{
  let tasks = [
    {
      content: "zrobić obiad",
      done: true,
    },
    {
      content: "posprzątać",
      done: false,
    },
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="list__item">
       <button class="list__buttonTask list__buttonTask--done js-done">
       ${task.done ? " ✓ " : ""}
       </button>
       <span class="list__content ${task.done ? "list__content--done" : ""}">
        ${task.content}
        </span>
        <button class="list__buttonTask list__buttonTask--remove js-remove">🗑</button>
        </li>
        `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
  };

  const init = () => {
    render();
  };

  init();
}
