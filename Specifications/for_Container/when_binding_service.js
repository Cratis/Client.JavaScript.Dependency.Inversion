import "../setup";
import {Container} from "../../Source/Container";
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

    it("should have a result", () => result.should.be.defined);
});
 
//given(__moduleName, "an empty container", () => {
    
    //var context = new Context.default();
    /*
    var container = new Container();   

    it("should do stuff", () => {
        expect(true).toBe(true);
    });*/
//}));
