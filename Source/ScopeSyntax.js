/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Scope} from "./Scopes/Scope";
import {SingletonScope} from "./Scopes/SingletonScope";
import {Binding} from "./Binding";

const _bindingSyntax = new WeakMap();
const _scope = new WeakMap();

/**
 * Represents the syntax configuration for a {Scope}
 */
export class ScopeSyntax
{

    /**
     * Initializes a new instance of {ScopeSyntax}
     */
    constructor(bindingSyntax) {
        _bindingSyntax.set(this, bindingSyntax);
    }

    /**
     * Gets the {BindingSyntax} the {ScopeSyntax} is associated with
     * 
     * @property {BindingSyntax}
     */
    get bindingSyntax() {
        return _bindingSyntax.get(this);
    }

    /**
     * Gets the scope
     * 
     * @property {Scope}
     */
    get scope() {
        return _scope.get(this);
    }

    /**
     * Define the scope to be a singleton
     */
    asSingleton() {
        let scope = new SingletonScope();
        this.as(scope); 
    }
    
    /**
     * Define a specific scope as lifecycle
     * 
     * @param {Scope} scope The scope representing the lifecycle
     */
    as(scope) {
        _scope.set(this, scope);

        var binding = new Binding();
        this.bindingSyntax.container.add(binding);
        
    }
}