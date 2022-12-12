import { Component } from 'react';

class SearchBox extends Component {
	render() {
		const { placeholder } = this.props;
		return (
			<input
				className={this.props.className}
				type="search"
				placeholder={this.props.placeholder}
				// Cada vez que se actualiza el input, el estado también.
				onChange={this.props.onChangeHandler}
			/>
		);
	}
}

export default SearchBox;
