/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-50d709e9'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "../src/styles/fonts/Ellipse.svg",
    "revision": "ba186f472d1116442b7b554f004533ef"
  }, {
    "url": "../src/styles/fonts/MaterialIcons-Regular.eot",
    "revision": "4c73881afe654b72a1eae428368202bd"
  }, {
    "url": "../src/styles/fonts/MaterialIcons-Regular.svg",
    "revision": "a67013b29a1d4079f86303f074db8c9f"
  }, {
    "url": "../src/styles/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  }, {
    "url": "../src/styles/fonts/MaterialIcons-Regular.woff",
    "revision": "40f1ca3d4ae7aa1758d5ae1122f3a99a"
  }, {
    "url": "../src/styles/fonts/Montserrat-Regular.eot",
    "revision": "af0492c24e83e57b6b8a843d96c818af"
  }, {
    "url": "../src/styles/fonts/Montserrat-Regular.svg",
    "revision": "7066b320b56bc49a45b07c5f23d9b9e4"
  }, {
    "url": "../src/styles/fonts/Montserrat-Regular.ttf",
    "revision": "ee6539921d713482b8ccd4d0d23961bb"
  }, {
    "url": "../src/styles/fonts/Montserrat-Regular.woff",
    "revision": "c5b3f5f9512bd455789cb18694940241"
  }, {
    "url": "../src/styles/fonts/Vector.svg",
    "revision": "e74a04049ac910f239e01882246b74fc"
  }, {
    "url": "main.js",
    "revision": "da48a665861b234d12901afcc2ba6187"
  }, {
    "url": "vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-0d3586.js",
    "revision": "1dd619fa736fed5192f843fb1e9e2c73"
  }], {});

});
