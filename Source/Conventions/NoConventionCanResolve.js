/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {Exception} from "cratis.javascript.core/Exception";

/**
 * The exception that gets thrown if there is no {Convention} that can resolve a service binding
 */
export class NoConventionCanResolve extends Exception
{
    /**
     * Initializes a new instance of {NoConventionCanResolve}
     */
    constructor() {
        super("No convention is able to resolve service");
    }
}