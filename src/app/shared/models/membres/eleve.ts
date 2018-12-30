import {Profile} from './profile';
import {Niveau} from '../parametres/niveau';
import {Ecole} from '../parametres/ecole';
import { Civilite } from '../parametres/civilite';
import { Piece } from '../parametres/piece';
import { Fonction } from '../parametres/fonction';
import { Adresse } from '../adresse';
import { Reseau } from '../reseau';
import { UserRole } from './user-role';
import { Genre } from '../parametres/genre';
import { Pays } from '../parametres/pays';
import { Ville } from '../parametres/ville';

export class Eleve extends Profile{
	constructor(
		public id?: number,		
		public role?: UserRole,		
		public code?: string,		
		public login?: string,		
		public password?: string,	
		public userReass?:string,			
		public email?: string,		
		public url?:string,			
		public activation_key?: string,		
		public token?: string,		
		public lastvisit?: number,		
		public online?: boolean,		
		public validate?: boolean,		
		public locked?: boolean,		
		public added_by?: number,	
		public genre?: Genre,
		public civilite?:Civilite, 
		public nom?:string,
		public prenom?:string,
		public nickname?:string, 
		public dateNais?: Date,
		public lieuNais?: string,
		public piece?: Piece,
		public numPiece?: string,
		public fonction?: Fonction,
		public pays?: Pays,
		public ville?: Ville,
		public adresse?: Adresse,  
		public reseau?: Reseau,
		public photo?: string,
		public is_valid?:number,
		public code_eleve?: string, 
		public niveau?: Niveau, 
		public ecole?: Ecole,
		public status?:number,
	){
		super();	
	}
	
}
