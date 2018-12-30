import { Nav } from './nav';

export class Breadcrumb{
	constructor(
		public nav: Nav[],
		public active_nav:Nav,
		public fa:string){}
}