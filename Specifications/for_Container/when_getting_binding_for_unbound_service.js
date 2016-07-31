/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from "./given/an_empty_container";
import {MissingBindingForService} from "../../Source/MissingBindingForService"; 

describe("when getting binding for unbound service", () => {
    const service = "Some service";
    let context = null; 
    let exception = null;

    beforeEach(() => {
        context = new Context.default();

        (becauseOf => {
            try { context.container.getBindingFor(service) } catch (e) { exception = e };
        })();
    });

    it("should throw missing binding for service", () => exception.should.be.instanceof(MissingBindingForService));
    it("should pass the service to the exception", () => false.should.be.true);
});