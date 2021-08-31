import { useState } from 'react';

import ListItemValue from './ListItemValue';
import ListItemButton from './ListItemButton';

function ListItem(props) {
	const [value, setValue] = useState(props.value);
	const [isEditing, setIsEditing] = useState(false);
	return <li>
		<ListItemValue value={value} setValue={setValue} isEditingState={isEditing} />
		<ListItemButton 
			label={isEditing ? 'Save' : 'Edit'} 
			isEditingState={isEditing} 
			setIsEditingState={setIsEditing} 
		/>
	</li>
}

export default ListItem;