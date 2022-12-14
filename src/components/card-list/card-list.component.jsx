import { Component } from 'react';
import './card-list.styles.css';
import CardContent from '../card/card.component';

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<div className="card-list">
				{monsters.map((monster) => {
					return (
						<CardContent monster={monster} />
					);
				})}
			</div>
		);
	}
}

export default CardList;
