/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ScopeSyntax} from "../../Source/ScopeSyntax";

describe("when creating", () => {
    const bindingSyntax = "Binding Syntax";
    let scopeSyntax = null;

    beforeEach(() => {
        (becauseOf => scopeSyntax = new ScopeSyntax(bindingSyntax))()
    });

    it("should have the binding syntax on it", () => scopeSyntax.bindingSyntax.should.equal(bindingSyntax));
});