$(function() {
  $(".accordion-header").click(function() {
    $(".accordion-content").not($(this).next()).slideUp();
        $(this).next(".accordion-content").slideDown();
  });

  $("button").click(function() {
    $.ajax({
      url: "https://dummyjson.com/todos",
      method: "GET",
      success: function(data) {
        var todos = data.todos;
        var todoList = $("ul");
        todoList.empty();
        todos.forEach(function(todo) {
          todoList.append("<li>" + todo.todo + "</li>");
        });
      },
      error: function() {
        alert("Failed to load to-do items.");
      }
    });
  });
});