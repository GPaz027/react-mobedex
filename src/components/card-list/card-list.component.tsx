import { Monster } from "../../App";
import "./card-list.styles.css";
import CardContent from "../card/card.component";

// Como monsters está en primer lugar, se puede desestructurar.
// Se puede poner un return implícito.

type CardProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContent monster={monster} />;
    })}
  </div>
);

export default CardList;
