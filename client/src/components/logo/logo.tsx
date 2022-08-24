import React, {LegacyRef, MouseEventHandler} from 'react';
import classes from './logo.module.scss';

import logo from '../../assets/logo/logo.svg';
import logoHover from '../../assets/logo/logo-hover.svg';

export const Logo:React.FC = () => {
	// const navigate = useNavigate();
	const imageRef = React.useRef<any>(null);
	const circleRef = React.useRef<any>(null);
	const buttonRef = React.useRef<any>(null);

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

		const handleButtonClick = (e:React.MouseEvent) => {
			const buttonCoordinates = buttonRef.current.getBoundingClientRect();
			if (e.clientX < buttonCoordinates.left || e.clientX > buttonCoordinates.right) return;
			if (e.clientY < buttonCoordinates.top || e.clientY > buttonCoordinates.bottom) return;
		};

		imageRef.current?.addEventListener('mousemove', handleHover, false);
		imageRef.current?.addEventListener('click', handleButtonClick);

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
							<rect x="0" y="0" width="210" height="95" fill="#FFFFFF" />
							<circle ref={circleRef} cx="0" cy="0" r="50" fill="#000000" />
						</g>
					</mask>
				</defs>
				<image className={classes.logo_image} ref={imageRef} width="235" height="95" xlinkHref={logo} />
			</svg>
			<img src={logoHover} alt="logo" className={classes.logo_img} />
		</div>
	);
};
