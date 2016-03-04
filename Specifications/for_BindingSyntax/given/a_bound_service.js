import {BindingSyntax} from "../../../Source/BindingSyntax";

export default class 
{
    constructor() {
        this.service = "Some service";
        this.bindingSyntax = new BindingSyntax(this.service); 
    }
}