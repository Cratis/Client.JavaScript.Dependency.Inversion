/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Convention} from "../../../../Source/Conventions/Convention";
import {Conventions} from "../../../../Source/Conventions/Conventions";

class MyConvention extends Convention 
{
    constructor() {
        super();
        this.resolve = sinon.stub();
    }    
}

export default class 
{
    constructor() {
        this.convention = new MyConvention()
        this.conventions = new Conventions([this.convention]);
    }
}