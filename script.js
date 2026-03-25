$(document).ready(function () {

  // Add Task
  $("#addBtn").click(function () {
    let task = $("#taskInput").val().trim();

    if (task !== "") {
      $("#taskList").append(`
        <li>
          <span class="task-text">${task}</span>
          <button class="delete">X</button>
        </li>
      `);

      $("#taskInput").val("");
    }
  });

  // Press Enter to Add Task
  $("#taskInput").keypress(function (e) {
    if (e.which === 13) {
      $("#addBtn").click();
    }
  });

  // Toggle Complete
  $(document).on("click", ".task-text", function () {
    $(this).toggleClass("completed");
  });

  // Delete Task
  $(document).on("click", ".delete", function () {
    $(this).parent().remove();
  });

});
