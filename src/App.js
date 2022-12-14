import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { useState, useEffect } from 'react';

const App = () => {
	const [ searchField, setSearchField ] = useState(''); // Devuelve [initial value, setValue]
	const [ monsters, setMonsters ] = useState([]);
	const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => {
			setMonsters(users);
		});
	}, []); // La única vez que corre este useEffect es al principio, cuando se renderiza el componente (esto es porque el segundo argumento está vacío, el arreglo).

	useEffect(
		() => {
			const newFilteredMonsters = monsters.filter((monster) => {
				return monster.name.toLocaleLowerCase().includes(searchField);
			});
			setFilteredMonsters(newFilteredMonsters);
		},
		[ monsters, searchField ]
	); // El filtrado ahora se ejecuta sólo cuando hay actualizaciones en monsters o searchField, lo que evita que se filtre en caso de haber otra actualización de estado si existiese.

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString); // Solo renderizará si el valor que se pasa es distinto al estado actual
	};

	return (
		<div className="App">
			<h1 className="app-title">Monster Rolodex</h1>
			<SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="search-box" />
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
