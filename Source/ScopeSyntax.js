/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Scope} from "./Scopes/Scope";
import {SingletonScope} from "./Scopes/SingletonScope";

const _scope = new WeakMap();

export class ScopeSyntax
{
    /**
     * Gets the scope
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
    }
}