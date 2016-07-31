/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "./BindingSyntax";
import {Module} from "./Module";
import {BindingForServiceAlreadyExists} from "./BindingForServiceAlreadyExists";
import {MissingBindingForService} from "./MissingBindingForService"; 

const _bindings = new WeakMap();

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
        _bindings.set(this, {});
    }
    
    /**
     * Get all the bindings for the container
     * @property {Binding[]}
     */
    get bindings() {
        return _bindings.get(this);
    }

    /**
     * Gets the binding for a specific service
     * 
     * @throws {MissingBindingForService} if there is no {Binding}
     */
    getBindingFor(service) {
        if( !this.bindings.hasOwnProperty(service) ) MissingBindingForService.throw(service);
        return this.bindings[service];
    } 

    /**
     * Add a binding to the container
     * @param {Binding} to add.
     */
    add(binding) {
        if( this.bindings.hasOwnProperty(binding.service)) BindingForServiceAlreadyExists.throw(binding.service);
        this.bindings[binding.service] = binding;
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

    /**
     * Get instance of a specific service
     * @param {service} service Service to get instance for
     * @return {Object} Resolved instance of service
     */
    get(service) {
        if( !this.bindings.hasOwnProperty(service) ) MissingBindingForService.throw(service);
        return "";
    }
}