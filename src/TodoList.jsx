import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';

const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

export default function TodoList() {
	const [todos, setTodos] = useState(initialTodos);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

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

	const addTodo = (text) => {
		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{ text: text, id: crypto.randomUUID(), completed: false },
			];
		});
	};

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Typography variant="h4" gutterBottom>
				Todo list
			</Typography>
			<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
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
				<TodoForm addTodo={addTodo} />
			</List>
		</Box>
	);
}
