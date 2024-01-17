import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = [
	{ id: 1, text: 'walk the dog', completed: false },
	{ id: 2, text: 'walk the cat', completed: true },
	{ id: 3, text: 'walk the chicken', completed: true },
];

export default function TodoList() {
	const [todos, setTodos] = useState(initialTodos);

	const removeTodo = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((t) => t.id !== id);
		});
	};

	const toggleTodo = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				} else {
					return todo;
				}
			});
		});
	};

	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{todos.map((todo) => (
				<TodoItem
					todo={todo}
					key={todo.id}
					//remove passed without id (id passed in the child component)
					remove={removeTodo}
					//toggle is passed as a function where id is given already
					toggle={() => toggleTodo(todo.id)}
				/>
			))}
			<TodoForm />
		</List>
	);
}
