import ListItem from './ListItem';

function List(props) {
    const items = props.data.map((item) =>
        <ListItem key={item.key} data={item}/>
    );
    return <>
        <h1>List o' Things</h1>
        <ul>{items}</ul>
    </>;
}

export default List;