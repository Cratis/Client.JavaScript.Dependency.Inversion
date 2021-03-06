/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from "./given/an_undefined_scope";
import {SingletonScope} from "../../Source/Scopes/SingletonScope";
import {Binding} from "../../Source/Binding";

describe("when scoping to singleton", () => {
    let context = null;
    let binding = null;

    beforeEach(() => {
        context = new Context.default();

        (becauseOf => {
            context.scopeSyntax.asSingleton();
        })();
    });

    it("should set it to be the given scope", () => context.scopeSyntax.scope.should.be.instanceof(SingletonScope));
});