factor-bundle Issue #13 example
===============================

Simple adaptation of [browserify's multiple bundles example](https://github.com/substack/node-browserify#multiple-bundles) the
illustrates [factor-bundle issue #13](https://github.com/substack/factor-bundle/issues/13). The change is that beep.js, boop.js, and robot.js
all require jQuery. You know, because [jQuery is really great and does all things](http://www.doxdesk.com/img/updates/20091116-so-large.gif).

 1. `npm install`
 2. `./build`
 3. `python -m SimpleHTTPServer 8080`
 4. Open [http://localhost:8080](http://localhost:8080)
 5. `$` should be jQuery but is `robot.js`, and `robot` is `jQuery`.