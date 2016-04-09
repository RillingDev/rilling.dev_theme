---
title: 'Shims n'' Fills'
published: true
taxonomy:
    category:
        - Javascript
    tag:
        - Javascript
        - Shims
        - Polyfill
content:
    pagination: true
---

Most of the time when speaking of “Cross-Browser Compatibility” we think about styling and visuals, but its more than that: Simmiliar to styles, every browser/engine and version of said supports different JS standards - but what can you do when one doesnt support something you need? No need to fear, you can prevent that! Lets start by looking how JS features are versionized

## Understanding ECMAScript

[ECMAScript] is the name of the scripting language that JavaScript is an Implementation of. This also helps Indicating which features are supported in which browser: ECMAScript has different version ranging from ES1 to ES7. Currently the most up-to-date one is ES5, whose [features are supported in most of the current browsers.]

So…what can we do to make sure the user’s browser supports the features our web-app requires? lets start by looking at…

### …Modernizr

If you have some experience with JavaScript you most likely heard of [Modernizr] before. It’s a JavaScript library dedicated to test if the current browser supports the given feature. Not only does it check JavaScript functionality, it also tests for certain CSS and HTML features. There’s also a nifty customiser on their website allowing you to only use the components you will need for your project.

Now we can check if the browser has the features we need - but what if he doesn’t?

## Shims n’ Polyfills

Two words you’ll read a lot when talking about Cross-Browser Compatibility are “Shim” and “Polyfill” - what are those?

[**Shim**]

A Shim is a small code library with the purpose to change or add functionality in an application so that there can be a normalized behavior.

[**Polyfill**]

Polyfills are simmiliar to Shims but with the difference that they add functionality that should already exist. Polyfills is a Web-development exclusive term.

Most Shims/Polyfills are dedicated to fill one job like a shim that adds ES6 support or a polyfill that allows the use of canvas in legacy browsers

## How/Where can I find the Shims/Polyfills I need?

Besides googling, here are some popular shim and polyfill sources:

Repositorys:

-   [ES-Shims]
-   [Modernizr’s Polyfill Collection]

### How do i use Shims/Polyfills?

This depends heavily on the Shim/Polyfill you use but most of them can be simple included like any other JavaScript library

  [ECMAScript]: https://en.wikipedia.org/wiki/ECMAScript
  [features are supported in most of the current browsers.]: http://kangax.github.io/compat-table/es5/
  [Modernizr]: https://modernizr.com/
  [**Shim**]: https://en.wikipedia.org/wiki/Shim_(computing)
  [**Polyfill**]: https://en.wikipedia.org/wiki/Polyfill
  [ES-Shims]: https://github.com/es-shims
  [Modernizr’s Polyfill Collection]: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills
