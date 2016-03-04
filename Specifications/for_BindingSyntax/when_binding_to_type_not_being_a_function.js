import {BindingSyntax} from "../../Source/BindingSyntax";
import * as Context from "./given/a_bound_service";

describe("when binding to type not being a function", () => {
    const type = "Some Constant";
    let context = null;
    let exception = null;
    
    beforeEach(() => {
        context = new Context.default();
        
        (beforeEach => {
            try { context.bindingSyntax.to(type) } catch(e) { exception = e }
        })();
    });

    it("should throw an exception", () => exception.should.be.defined);
});