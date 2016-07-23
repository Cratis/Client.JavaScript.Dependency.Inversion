import {Conventions} from "../../../Source/Conventions/Conventions";
import * as Context from "./given/a_convention_that_can_resolve_anything";

describe("when asking if service can be resolved with convention that can resolve it", () => {
    let context = null;
    let result = null;

    beforeEach(() => {
        context = new Context.default();
        result = context.conventions.canResolve({}, "something");
    });

    it("should not be able to resolve", () => result.should.be.true);
});