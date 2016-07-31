/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ScopeSyntax} from "../../../Source/ScopeSyntax";
import {Scope} from "../../../Source/Scopes/Scope";

export default class 
{
    constructor() {
        let scope = new Scope();
        this.scope = scope;


        this.bindingSyntax = {
            container: {
                add: sinon.stub()
            },
            binding: {
                scope: scope
            },
            service: { "some": "service"},
            strategy: { "some": "strategy" },
        };
        this.scopeSyntax = new ScopeSyntax(this.bindingSyntax); 
    }
}