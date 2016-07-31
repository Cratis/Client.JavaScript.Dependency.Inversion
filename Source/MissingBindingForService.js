/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Exception} from "cratis-javascript-core";

export class MissingBindingForService extends Exception
{
    constructor(service) {
        super(`Missing binding for service ´${service}´`);
        this.service = service;
    }
}    