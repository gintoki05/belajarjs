const todos = [
  {
    title: 'b',
    completed: true
  },
  {
    title: 'c',
    completed: false
  },
  {
    title: 'd',
    completed: true
  },
  {
    title: 'a',
    completed: false
  },
  {
    title: 'e',
    completed: true
  }
];

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

// const getThingsToDo = function(todos) {
//   return todos.filter(function(todo) {
//     return !todo.completed;
//   });
// };

// console.log(getThingsToDo(todos));

// const deleteTodo = function(todos, todoText) {
//   const index = todos.findIndex(function(todo) {
//     return todo.title.toLowerCase() === todoText.toLowerCase();
//   });

//   if (index > -1) {
//     todos.splice(index, 1);
//   }
// };

// deleteTodo(todos, 'Belajar');
// console.log(todos);
