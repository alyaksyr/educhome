import { Children } from "./children";
import { PullRights } from "./pull-rights";

export class MenuItem{
    constructor(
        public label?:string,
        public separator?:boolean,
        public route?:string,
        public iconClasses?:string,
        public children?:Children[],
        public pullRights?:PullRights[]
    ){}
}