import {Container} from "../../Source/Container";
import * as Context from "./given/a_context";

describe("when doing stuff", () => {
    var context = new Context.default();
    var container = new Container();   

    it("should do stuff", () => {
        expect(true).toBe(true);
    });
});
