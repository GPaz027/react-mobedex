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
			monsters: [],
			searchField: ''
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

	/* Esta función solamente se construye una sola vez en el componente (antes se creaba cada
	vez que había un cambio en el input porque era una función anónima). Optimización 1 */
	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	}

	render() {

		/* Esto hace que sea más legible. Extracción del estado. Optimización 2 */
		const { monsters, searchField} = this.state;
		const { onSearchChange } = this;

		// Los monsters que aparecerán serán el resultado de lo que se ponga en el input, por lo que
		// lo que se renderizará no será el estado original, sino el resultado del filtrado.
		// Esto de usar otro array y no el estado orignal es el principio de INMUTABILIDAD.
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					// Cada vez que se actualiza el input, el estado también.
					onChange={onSearchChange}
				/>
				{filteredMonsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
