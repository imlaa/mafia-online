import React from 'react';
import classes from './logo.module.scss';

import logo from '@/assets/logo/logo.svg';
import logoHover from '@/assets/logo/logo-hover.svg';

export const Logo:React.FC = () => {
	const imageRef = React.useRef<any>(null);
	const circleRef = React.useRef<any>(null);

	React.useEffect(() => {
		const imgPos = imageRef.current?.getBoundingClientRect();
		const imgX = imgPos?.left;
		const imgY = imgPos?.top;

		const rectHalfWidth = circleRef.current?.getAttribute('width') / 2;
		const rectHalfHeight = circleRef.current?.getAttribute('height') / 2;

		const handleHover = (e:React.MouseEvent) => {
			circleRef.current?.setAttribute('cx', e.clientX - imgX - rectHalfWidth);
			circleRef.current?.setAttribute('cy', e.clientY - imgY - rectHalfHeight);
		};

		imageRef.current?.addEventListener('mousemove', handleHover, false);

		return () => {
			imageRef.current?.removeEventListener('mousemove', handleHover);
		};
	}, []);

	return (
		<div className={classes.logo_container}>
			<svg className={classes.svg}>
				<defs>
					<mask id="cursorMask" maskUnits="objectBoundingBox">
						<g>
							<rect x="0" y="0" width="300" height="75" fill="#FFFFFF" />
							<circle ref={circleRef} cx="0" cy="0" r="50" fill="#000000" />
						</g>
					</mask>
				</defs>
				<image className={classes.logo_image} ref={imageRef} width="300" height="75" xlinkHref={logo} />
			</svg>
			<img src={logoHover} alt="logo" className={classes.logo_img} />
		</div>
	);
};
