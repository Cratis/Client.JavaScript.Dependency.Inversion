SystemJS.config({
    paths: {
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/",
        "local:": "jspm_packages/local/",
        "cratis.client.javascript.dependencyinversion/": "Source/"
    },
    browserConfig: {
        "baseURL": "/"
    },
    devConfig: {
        "map": {
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "cratis.client.javascript.dependencyinversion": {
            "main": "index.js",
            "format": "csj",
            "defaultExtension": "js",
            "meta": {
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json",
        "local:*.json"
    ],
    map: {
        "Distribution": "local:Distribution@master",
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
        "cratis.javascript.core": "npm:cratis.javascript.core@1.0.0",
        "cratis.javascript.reflection": "npm:cratis.javascript.reflection@1.0.0"
    },
    packages: {
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
    }
});