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


export class BindingSyntax {
    constructor(service) {
        _service.set(this, service);
    }

    get service() {
        return _service.get(this);
    }

    get strategy() {
        return _strategy.get(this);
    }

    get scopeSyntax() {
        return _scopeSyntax.get(this);
    }

    toConstant(constant) {
        let strategy = new ConstantActivationStrategy()
        let scopeSyntax = handleStrategyAndScope.call(this, strategy);
        return scopeSyntax;
    }

    to(type) {
        if( typeof type !== "function") throw "You can't bind to something that is not a function";
        var strategy = new TypeActivationStrategy()
        let scopeSyntax = handleStrategyAndScope.call(this, strategy);
        return scopeSyntax;
    }

    toCallback(fn) {
        var strategy = new CallbackActivationStrategy()
        let scopeSyntax = handleStrategyAndScope.call(this, strategy);
        return scopeSyntax;
    }
}