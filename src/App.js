import { Component, useSyncExternalStore } from 'react';

import logo from './logo.svg';
import './App.css';

// En este tipo de componentes, se corre primero el constructor, donde se inicializa el estado.
// Luego corre el render(), que determina qué mostrar.
// En tercer lugar, corre el componentDidMount()

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: []
		};
	}

	// API calls should be on this method
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) =>
			this.setState(() => {
				return {
					monsters: users
				};
			})
		);
	}

	render() {
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						console.log(event.target.value);
						const searchString = event.target.value.toLocaleLowerCase();
						const filteredMonsters = this.state.monsters.filter((monster) => {
							return monster.name.toLocaleLowerCase().includes(searchString);
						});
						this.setState(() => {
							return { monsters: filteredMonsters };
						});
					}}
				/>
				{this.state.monsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
