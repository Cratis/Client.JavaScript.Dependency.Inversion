import {BindingSyntax} from "../../Source/BindingSyntax";

describe("when creating", () => {
    const service = "Some service";
    let bindingSyntax = null;
    
    beforeEach(() => bindingSyntax = new BindingSyntax(service));

    it("should have the service on it", () => bindingSyntax.service.should.equal(service));    
});