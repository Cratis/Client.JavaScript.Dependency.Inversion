/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "../../Source/BindingSyntax";
import {CallbackActivationStrategy} from "../../Source/Strategies/CallbackActivationStrategy";
import {ScopeSyntax} from "../../Source/ScopeSyntax";
import * as Context from "./given/a_bound_service";

describe("when binding to callback", () => {
    const type = "Some Constant";
    let context = null;
    let scopeSyntax = null;
    
    beforeEach(() => {
        context = new Context.default();
        
        (becauseOf => {
            scopeSyntax = context.bindingSyntax.toCallback(() => {});
        })();
    });

    it("should set the correct constant activation strategy on the syntax", () => (context.bindingSyntax.strategy instanceof CallbackActivationStrategy).should.be.true);
    it("should set the scope syntax on the binding syntax", () => (context.bindingSyntax.scopeSyntax instanceof ScopeSyntax).should.be.true);
    it("should return a scope", () => (scopeSyntax instanceof ScopeSyntax).should.be.true);
});