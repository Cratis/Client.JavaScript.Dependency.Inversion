
import {BindingSyntax} from "../../Source/BindingSyntax";
import {TypeActivationStrategy} from "../../Source/Strategies/TypeActivationStrategy";
import {ScopeSyntax} from "../../Source/ScopeSyntax";
import * as Context from "./given/a_bound_service";

describe("when binding to type", () => {
    const type = "Some Constant";
    let context = null;
    let scopeSyntax = null;
    
    beforeEach(() => {
        context = new Context.default();
        
        (beforeEach => {
            scopeSyntax = context.bindingSyntax.to(type);
        })();
    });

    it("should set the correct constant activation strategy on the syntax", () => (context.bindingSyntax.strategy instanceof TypeActivationStrategy).should.be.true);
    it("should set the scope syntax on the binding syntax", () => (context.bindingSyntax.scopeSyntax instanceof ScopeSyntax).should.be.true);
    it("should return a scope", () => (scopeSyntax instanceof ScopeSyntax).should.be.true);
});