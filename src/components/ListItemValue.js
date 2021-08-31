function ListItemValue(props) {
	let display;
	{/* if we're in edit mode, display the value in an input field */ }
	if (props.isEditingState) {
		display = <input
			type="text"
			value={props.value}
			onChange={e => props.setValue(e.target.value)}
		/>

		{/* if we're not in edit mode, display the value in a readonly kind of way */ }
	} else {
		display = <span>{props.value}</span>
	}
	return display;
}

export default ListItemValue;