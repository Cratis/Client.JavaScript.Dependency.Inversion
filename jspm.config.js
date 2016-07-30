SystemJS.config({
    paths: {
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/",
        "cratis-client-javascript-dependencyinversion/": "Source/"
    },
    browserConfig: {
        "baseURL": "/"
    },
    devConfig: {
        "map": {
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
            "process": "github:jspm/nodelibs-process@0.2.0-alpha",
            "core-js": "npm:core-js@1.2.7",
            "babel-runtime": "npm:babel-runtime@5.8.38",
            "path": "github:jspm/nodelibs-path@0.2.0-alpha",
            "fs": "github:jspm/nodelibs-fs@0.2.0-alpha"
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "cratis-client-javascript-dependencyinversion": {
            "main": "Distribution/index.js",
            "meta": {
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.7.1"
            }
        },
        "npm:buffer@4.7.1": {
            "map": {
                "base64-js": "npm:base64-js@1.1.2",
                "isarray": "npm:isarray@1.0.0",
                "ieee754": "npm:ieee754@1.1.6"
            }
        }
    },
    map: {
        "Distribution": "local:Distribution@master",
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
        "cratis-javascript-reflection": "github:Cratis/JavaScript.Reflection@master"
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "cratis-javascript-core": "github:Cratis/JavaScript.Core@master"
    },
    packages: {
        "github:Cratis/JavaScript.Core@master": {
            "map": {
                "cratis-javascript-reflection": "github:Cratis/JavaScript.Reflection@master"
            }
        }
    }
});