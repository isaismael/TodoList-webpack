import { crearTodoHtml} from './js/componentes';
import './styles.css';

import { Todo, TodoList } from './classes'



const todoList = new TodoList();

const tarea = new Todo('Aprender JS!!!');
todoList.nuevoTodo( tarea );



console.log( todoList );

crearTodoHtml( tarea );