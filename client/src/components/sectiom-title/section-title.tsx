import React from 'react';
import classes from './section-title.module.scss';

interface SectionTitleProps {
	title: string
}

export const SectionTitle:React.FC<SectionTitleProps> = ({ title }) => {
	return (
		<div className={classes.section_title}>
			{ title }
		</div>
	);
};
