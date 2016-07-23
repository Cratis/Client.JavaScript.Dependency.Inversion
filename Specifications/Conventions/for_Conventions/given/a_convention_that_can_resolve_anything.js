import {Convention} from "../../../../Source/Conventions/Convention";
import {Conventions} from "../../../../Source/Conventions/Conventions";


class MyConvention extends Convention {
    
    constructor() {
        super();
        this.resolve = sinon.stub();
    }    

    canResolve(container, service) {
        return true;
    }
}

export default class {
    constructor() {
        this.convention = new MyConvention();
        this.conventions = new Conventions([this.convention]);
    }
}