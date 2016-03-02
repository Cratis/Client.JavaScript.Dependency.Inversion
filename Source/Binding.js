import {ActivationStrategy} from "./Strategies/ActivationStrategy";

const _service = new WeakMap();
const _strategy = new WeakMap();
const _scope = new WeakMap();

export class Binding
{
    constructor(service, strategy, scope) {
        _service.set(this, service);
        _strategy.set(this, strategy);
        _scope.set(this, scope);
    }
    
    get service() {
        return _service.get(this);
    }
    
    get strategy() {
        return _strategy.get(this);        
    }
    
    get scope() {
        return _scope.get(this);
    }
}