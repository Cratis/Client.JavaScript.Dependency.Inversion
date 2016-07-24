SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "paths": {
      "cratis.client.javascript.dependencyinversion/": "/src/"
    }
  },
  nodeConfig: {
    "paths": {
      "cratis.client.javascript.dependencyinversion/": "src/"
    }
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.decorators"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.35"
  },
  packages: {
    "cratis.client.javascript.dependencyinversion": {
      "main": "cratis.client.javascript.dependencyinversion.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "sinon": "npm:sinon@1.17.4",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
  },
  packages: {
    "npm:formatio@1.1.1": {
      "map": {
        "samsam": "npm:samsam@1.1.2"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:sinon@1.17.4": {
      "map": {
        "formatio": "npm:formatio@1.1.1",
        "lolex": "npm:lolex@1.3.2",
        "samsam": "npm:samsam@1.1.2",
        "util": "npm:util@0.10.3"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.1"
      }
    },
    "npm:buffer@4.7.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2"
      }
    }
  }
});
