/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from "./given/an_undefined_scope";
import {SingletonScope} from "../../Source/Scopes/SingletonScope";

describe("when scoping to singleton", () => {
    let context = null;

    beforeEach(() => {
        context = new Context.default();

        (becauseOf => {
            context.scopeSyntax.asSingleton();
        })();
    });

    it("should set it to be a singleton scope", () => context.scopeSyntax.scope.should.be.instanceof(SingletonScope));
    it("should add a binding to the container", () => context.bindingSyntax.container.add.called.should.be.true);
});