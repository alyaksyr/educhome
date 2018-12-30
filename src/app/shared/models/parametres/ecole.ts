import {Ville} from './ville';
import {TypeEcole} from './type-ecole';
import {StatutEcole} from './statut-ecole';

export class Ecole {
	constructor(
		public id?:number, 
		public ville?: Ville,
		public code?: string, 
		public typeEcole?: TypeEcole,
		public statutEcole?: StatutEcole,
		public libelle?: string, 
	){}
}
