import { ListItem, TextField, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';

export default function TodoForm({ addTodo }) {
	const [text, setText] = useState('');
	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(text);
		setText('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<ListItem>
				<TextField
					id="outlined-basic"
					label="Add todo"
					variant="outlined"
					onChange={handleChange}
					value={text}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									edge="end"
									type="submit"
								>
									<CreateIcon />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</ListItem>
		</form>
	);
}
