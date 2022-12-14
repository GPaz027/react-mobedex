import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
		<input
			className={`search-box ${className}`}
			type="search"
			placeholder={placeholder}
			// Cada vez que se actualiza el input, el estado también.
			onChange={onChangeHandler}
		/>
);

export default SearchBox;
