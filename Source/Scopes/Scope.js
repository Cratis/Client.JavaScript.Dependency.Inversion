/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {NotImplemented} from "cratis-javascript-core";

/**
 * Defines the basics of a scope.
 * 
 * Scopes define the lifecycle of a {Binding}
 */
export class Scope
{
    /**
     * Checks if there is an instance of the service in the scope
     */
    hasInstance(service) {
        NotImplemented.throw();
    }

    /**
     * Gets an instance of the service in the scope
     */
    getInstance(service) {
        NotImplemented.throw();
    }

    /**
     * Put an instance of a specific service into the scope 
     */
    putInstance(service, instance) {
        NotImplemented.throw();
    }
}