import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'http://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  const todo: Todo = response.data as Todo;
  console.log(`
    ${todo.id},
    ${todo.title},
    ${todo.completed}
  `);

  // console.log(response.data);
});

