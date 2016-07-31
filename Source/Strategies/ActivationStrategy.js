/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {NotImplemented} from "cratis-javascript-core";

/**
 * Defines the basics of an {ActivationStrategy}
 */
export class ActivationStrategy
{
    /**
     * Activates a binding to the target specified 
     * @return {Promise} A promise that gets resolved when it is activated
     */
    activate(activationContext, binding) {
        NotImplemented.throw();
    }
}