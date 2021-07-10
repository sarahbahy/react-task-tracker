import '../scss/header.scss';

const Header = ({onAdd , showAdd}) => {
    return (
        <header>
            <h1 >task tracker</h1>
            <button onClick={onAdd} className="btn">{showAdd ? 'close': 'add'}</button>
        </header>
    )
}

export default Header
