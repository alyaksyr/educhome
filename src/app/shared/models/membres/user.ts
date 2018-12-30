import{UserRole} from './user-role';

export class User {
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
	){}

}
