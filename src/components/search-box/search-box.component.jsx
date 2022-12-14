import { Component } from 'react';
import './search-box.styles.css'

class SearchBox extends Component {
	render() {
		const { placeholder } = this.props;
		return (
			<input
				className={`search-box ${this.props.className}`}
				type="search"
				placeholder={this.props.placeholder}
				// Cada vez que se actualiza el input, el estado también.
				onChange={this.props.onChangeHandler}
			/>
		);
	}
}

export default SearchBox;
