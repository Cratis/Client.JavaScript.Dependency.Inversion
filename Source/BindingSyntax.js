/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ScopeSyntax} from "./ScopeSyntax";
import {ConstantActivationStrategy} from "./Strategies/ConstantActivationStrategy";
import {TypeActivationStrategy} from "./Strategies/TypeActivationStrategy";
import {ComplexActivationStrategy} from "./Strategies/ComplexActivationStrategy";
import {CallbackActivationStrategy} from "./Strategies/CallbackActivationStrategy";

const _service = new WeakMap();
const _strategy = new WeakMap();
const _scopeSyntax = new WeakMap();


const handleStrategyAndScope = function (strategy) {
    _strategy.set(this, strategy);

    var scopeSyntax = new ScopeSyntax();
    _scopeSyntax.set(this, scopeSyntax);
    return scopeSyntax;
}

/**
 * Represents the syntax for defining a {Binding} in the container 
 */
export class BindingSyntax {
    
    /**
     * Initializes a new instance of {BindingSyntax}
     * @constructor
     * @param {Object} service Representation of the service - often the name of service in string form 
     */
    constructor(service) {
        _service.set(this, service);
    }

    /**
     * Get the service for the binding
     * @property {Object}
     */
    get service() {
        return _service.get(this);
    }

    /**
     * Get the {ActivationStrategy} for the binding
     * @property {ActivationStrategy}
     */
    get strategy() {
        return _strategy.get(this);
    }

    /**
     * Get the {ScopeSyntax} for the binding for defining the scope
     * @property {ScopeSyntax}
     */
    get scopeSyntax() {
        return _scopeSyntax.get(this);
    }


    /**
     * Bind to a constant
     * @param {Object} constant A constant the service is bound to
     */
    toConstant(constant) {
        let strategy = new ConstantActivationStrategy()
        let scopeSyntax = handleStrategyAndScope.call(this, strategy);
        return scopeSyntax;
    }

    /**
     * Bind to a type
     * @param {function} type A type the service is bound to
     */
    to(type) {
        if( typeof type !== "function") throw "You can't bind to something that is not a function";
        var strategy = new TypeActivationStrategy()
        let scopeSyntax = handleStrategyAndScope.call(this, strategy);
        return scopeSyntax;
    }

    /**
     * Bind to a callback that will resolve the binding
     * @param {function} fn Function that will be called
     */
    toCallback(fn) {
        var strategy = new CallbackActivationStrategy()
        let scopeSyntax = handleStrategyAndScope.call(this, strategy);
        return scopeSyntax;
    }
}