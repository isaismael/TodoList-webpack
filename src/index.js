import { crearTodoHtml} from './js/componentes';
import './styles.css';

import { Todo, TodoList } from './classes'



export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );