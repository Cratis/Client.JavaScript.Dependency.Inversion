import {BindingSyntax} from "./BindingSyntax";

export class Container
{
    constructor(modules) {
    }
    
    bind(service) {
        var bindingSyntax = new BindingSyntax(service);
        return bindingSyntax;
    }
}
