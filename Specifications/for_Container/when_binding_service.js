import "../setup";
import {Container} from "../../Source/Container";
import {Binding} from "../../Source/Binding";
import {BindingSyntax} from "../../Source/BindingSyntax";
import * as Context from "./given/an_empty_container";

describe("when doing stuff", () => {
    const service = "Some service";

    let context = null;
    let result = null;

    beforeEach(() => {
        context = new Context.default();

        (function becauseOf() {
            result = context.container.bind(service);
        })();
    });

    it("should be returning a binding syntax", () => result.should.be.instanceof(BindingSyntax));
});
