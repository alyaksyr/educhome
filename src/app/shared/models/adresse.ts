import { Ville } from "./parametres/ville";

export class Adresse {
    constructor(
		public ville?: Ville,
        public quartier?: string,
        public situation?: string,
        public mobile?: string,
		public telephone?: string
    ){}
}
