import React from 'react';
import classes from './action-button.module.scss';

interface ActionButtonProps {
	title: string
	icon: React.ReactNode
}

export const ActionButton:React.FC<ActionButtonProps> = React.memo(({title, icon}) => {
	return (
		<div className={classes.action_button}>
			{ icon }
			{ title }
		</div>
	);
});

