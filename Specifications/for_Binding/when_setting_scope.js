/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Binding} from "../../Source/Binding";

describe("when setting scope", () => {
    let binding = new Binding("service", "strategy", "scope");
    let scope = "Other scope";

    binding.scope = scope;

    it("should set the new scope", () => binding.scope.should.equal(scope));
});