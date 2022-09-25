import React from 'react';
import classes from './section-title.module.scss';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ActionButton } from '@/components';

interface SectionTitleProps {
	title: string
	createButton?: boolean
}

export const SectionTitle:React.FC<SectionTitleProps> = ({ title, createButton }) => {
	return (
		<div className={classes.section_title}>
			{ title }

			{createButton &&
				<ActionButton title={'Create room'} icon={<AddCircleIcon fontSize="large" />} />
			}
		</div>
	);
};
