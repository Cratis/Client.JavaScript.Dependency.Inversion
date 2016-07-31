/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from "./given/an_undefined_scope";
import {Scope} from "../../Source/Scopes/Scope";
import {Binding} from "../../Source/Binding";

describe("when scoping to scope", () => {
    let scope = new Scope();
    let context = null;
    let binding = null;

    beforeEach(() => {
        context = new Context.default();
        context.bindingSyntax.container.add = (input) => {
            binding = input;
        }; 

        (becauseOf => {
            context.scopeSyntax.as(scope);
        })();
    });

    it("should set it to be the given scope", () => context.scopeSyntax.scope.should.equal(scope));
    it("should add a binding to the container", () => binding.should.be.instanceof(Binding));
    it("should pass the service to the binding", () => binding.service.should.equal(context.bindingSyntax.service));
    it("should pass the strategy to the binding", () => binding.strategy.should.equal(context.bindingSyntax.strategy));
    it("should pass the scope to the binding", () => binding.scope.should.equal(context.scopeSyntax.scope));
});