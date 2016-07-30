/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "./BindingSyntax";
import {Module} from "./Module";

/**
 * Represents a root container for holding bindings 
 */
export class Container
{
    /**
     * Initializes a new instance of {Container}
     * @constructor
     * @param {Module[]} modules Any modules that will be loaded
     */
    constructor(modules=null) {
    }
    
    
    /**
     * Configure a binding for a specific service
     * @param {function} service Service to bind
     * @return {BindingSyntax}
     */
    bind(service) {
        var bindingSyntax = new BindingSyntax(this, service);
        return bindingSyntax;
    }
}
