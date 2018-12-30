import {Pays} from './pays';
export class Ville {
	constructor(
		public id?: number,
		public pays?: Pays, 
		public codeVille?: string, 
		public libelle?: string,
	){}
}
