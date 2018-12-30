import {Nav} from './nav';
export class Sidebox {
	constructor(
		public titre?: string,
		public navs?: Nav[],
		public subclass?: string
	){}
}
