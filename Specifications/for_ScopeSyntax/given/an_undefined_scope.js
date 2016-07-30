/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ScopeSyntax} from "../../../Source/ScopeSyntax";

export default class 
{
    constructor() {

        this.bindingSyntax = {
            container: {
                add: sinon.stub()
            },
            strategy: { "some": "strategy" }
        };
        this.scopeSyntax = new ScopeSyntax(this.bindingSyntax); 
    }
}