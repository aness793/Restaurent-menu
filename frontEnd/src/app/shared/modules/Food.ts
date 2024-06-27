export class foodInfo{
    id!:number;
    name!:string;
    description?:string;
    price!:number;
    tags?:string[];
    favorite:boolean=false;
    stars:number=0;
    imgUrl!:string;
    available!:boolean;
}