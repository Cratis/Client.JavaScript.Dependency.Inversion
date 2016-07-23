import {Convention} from "../../../../Source/Conventions/Convention";
import {Conventions} from "../../../../Source/Conventions/Conventions";

class MyConvention extends Convention 
{
    canResolve(container, service) {
        return true;
    }
}

export default class 
{
    constructor() {
        this.conventions = new Conventions([new MyConvention()]);
    }
}