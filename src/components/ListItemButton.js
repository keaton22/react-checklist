function ListItemButton(props) {
	return <button onClick={() => props.setIsEditingState(!props.isEditingState)}>
		{props.label}
	</button>
}

export default ListItemButton;