# Client.JavaScript.Dependency.Inversion

The goal of this project is to provide a way to manage your dependencies in your projects.
Typically exposing an IoC Container (Inversion of Control) and letting you have a place
to register bindings between services and their implementations. 


# Usage

SomeSystem.js:

    export class SomeSystem
    {
        constructor(someService) {
        }
    }

SomeService.js:

    export class SomeService
    {
        constructor(someOtherService) {
        }
    }

SomeOtherService.js:

    @Singleton
    export class SomeOtherService
    {
        constructor(aThirdService) {
        }
    }


AThirdService.js: 

    export class AThirdService
    {
    }

index.js - without modules:

    import {SomeSystem} from "./SomeSystem";
    import {SomeService} from "./SomeService";
    import {SomeOtherService} from "./SomeOtherService";

    let container = new Container();
    container.bind("someService").to(someService).inSingletonScope();
    container.bind("someOtherService").to(someOtherService);

    // AThirdService is picked up by the default conventions

    var someSystemInstance = container.get(someSystem);


MyModule.js:

    import {Module} from "Cratis.Client.JavaScript.Dependency.Inversion";
    import {SomeService} from "./SomeService";
    import {SomeOtherService} from "./SomeOtherService";

    export class MyModule extends Module
    {
        initialize(container) {
            container.bind("someService").to(someService).inSingletonScope();
            container.bind("someOtherService").to(someOtherService);
        }
    } 

index.js - with modules:

    import {SomeSystem} from "./SomeSystem";
    import {MyModule} from "./MyModule";

    let container = new Container(new MyModule());

    // AThirdService is picked up by the default conventions

    var someSystemInstance = container.get(someSystem);


## Explicitly specifying dependencies

You can explicitly specify dependencies rather than having them implicitly by 
convention be resolved by the parameter names in the constructor. 

    export class SomeSystem
    {
        @Dependencies("someService")
        constructor(service) {
        }
    }


# Conventions

Cratis is heavy on conventions rather than having to configure it all. 
On a constructor you can for instance specify your dependencies by the name of
the parameters going in. Cratis will from this automatically find the closest
system to match this in your folder hierarchy, if the metadata is present. 

# Metadata

Information about the layout of your files is important metadata for the convention
system in Cratis to work. (Some other project that this project uses)