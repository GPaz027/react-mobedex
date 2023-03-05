import { ChangeEvent } from "react";
import "./search-box.styles.css";

interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
}

interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void;
}

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; // Se recibe un evento del tipo HTML input element.
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    // Cada vez que se actualiza el input, el estado también.
    onChange={onChangeHandler}
  />
);

export default SearchBox;
