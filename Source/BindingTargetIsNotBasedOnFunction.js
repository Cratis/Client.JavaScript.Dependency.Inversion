/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Exception} from "cratis-javascript-core";

/**
 * Gets thrown when a binding target is not based on a function and it is required
 * 
 * Remarks: Typically even in ES201x a class is considered a function at its core  
 */
export class BindingTargetIsNotBasedOnFunction extends Exception
{
    /**
     * Initializes a new instance of {BindingTargetIsNotBasedOnFunction}
     */
    constructor(type) {
        super(`Binding target ´${type}´ is not a function at its core`);
        this.type = type;
    }
}