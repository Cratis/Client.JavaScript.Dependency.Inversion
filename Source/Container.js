/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "./BindingSyntax";

export class Container
{
    constructor(modules) {
    }
    
    bind(service) {
        var bindingSyntax = new BindingSyntax(service);
        return bindingSyntax;
    }
}
