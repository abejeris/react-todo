import { ListItem, TextField, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';

export default function TodoForm() {
	const [text, setText] = useState('');
	const handleChange = (e) => {
		setText(e.target.value);
	};
	return (
		<ListItem>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
				onChange={handleChange}
				value={text}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton aria-label="toggle password visibility" edge="end">
								<CreateIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</ListItem>
	);
}
