export class AllcatModel{
    constructor(
        public id:String,
        public image:string,
        public title:string,
        public time:string,
        public ingredient?:string,
        public instruction?:string
    ){}
}