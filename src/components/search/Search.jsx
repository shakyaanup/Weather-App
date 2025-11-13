import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import './style.scss';


const Search = ({ onSearch }) => {
	const [ value, setValue ] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const trimmed = value.trim();
		if (trimmed) onSearch(trimmed);
	}

	return (
		<form
			className="search-form"
			onSubmit={handleSubmit}
		>
			<input 
				className="search-form__input"
				placeholder="Search city"
				onChange={handleChange}
				value={value}
				name="city"
			/>
			<button
				className="search-form__button" 
				type="submit"
			>
				<IoSearchOutline />
			</button>
		</form>
	);
}

export default Search;