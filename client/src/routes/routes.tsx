import { IRoute } from '../models';
import { RoutesEnum } from './routes.enum';

import { Rooms, Rules, Account } from '../modules';

export const publicRoutes:IRoute[] = [
	{ path: RoutesEnum.ROOMS, element: <Rooms /> },
	{ path: RoutesEnum.RULES, element: <Rules /> },
	{ path: RoutesEnum.ACCOUNT, element: <Account /> },
];