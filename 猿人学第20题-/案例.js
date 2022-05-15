window = global;
document = {};

/******/
(function(modules) {
        // webpackBootstrap
        /******/
        // install a JSONP callback for chunk loading
        /******/
        function webpackJsonpCallback(data) {
            /******/
            var chunkIds = data[0];
            /******/
            var moreModules = data[1];
            /******/
            /******/
            /******/
            // add "moreModules" to the modules object,
            /******/
            // then flag all "chunkIds" as loaded and fire callback
            /******/
            var moduleId, chunkId, i = 0, resolves = [];
            /******/
            for (; i < chunkIds.length; i++) {
                /******/
                chunkId = chunkIds[i];
                /******/
                if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
                    /******/
                    resolves.push(installedChunks[chunkId][0]);
                    /******/
                }
                /******/
                installedChunks[chunkId] = 0;
                /******/
            }
            /******/
            for (moduleId in moreModules) {
                /******/
                if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                    /******/
                    modules[moduleId] = moreModules[moduleId];
                    /******/
                }
                /******/
            }
            /******/
            if (parentJsonpFunction)
                parentJsonpFunction(data);
            /******/
            /******/
            while (resolves.length) {
                /******/
                resolves.shift()();
                /******/
            }
            /******/
            /******/
        }
        ;/******/
        /******/
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // object to store loaded and loading chunks
        /******/
        // undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/
        // Promise = chunk loading, 0 = chunk loaded
        /******/
        var installedChunks = {
            /******/
            "main": 0/******/
        };
        /******/
        /******/
        /******/
        /******/
        // script path function
        /******/
        function jsonpScriptSrc(chunkId) {
            /******/
            return "/static/match/match20/" + chunkId + ".index.js"
            /******/
        }
        /******/
        /******/
        // object to store loaded and loading wasm modules
        /******/
        var installedWasmModules = {};
        /******/
        /******/
        function promiseResolve() {
            return Promise.resolve();
        }
        /******/
        /******/
        var wasmImportObjects = {
            /******/
            "./pkg/index_bg.wasm": function() {
                /******/
                return {
                    /******/
                    "./index_bg.js": {
                        /******/
                        "__wbg_instanceof_Window_434ce1849eb4e0fc": function(p0i32) {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Window_434ce1849eb4e0fc"](p0i32);
                            /******/
                        },
                        /******/
                        "__wbg_document_5edd43643d1060d9": function(p0i32) {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbg_document_5edd43643d1060d9"](p0i32);
                            /******/
                        },
                        /******/
                        "__wbg_body_7538539844356c1c": function(p0i32) {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbg_body_7538539844356c1c"](p0i32);
                            /******/
                        },
                        /******/
                        "__wbg_newnoargs_f579424187aa1717": function(p0i32, p1i32) {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbg_newnoargs_f579424187aa1717"](p0i32, p1i32);
                            /******/
                        },
                        /******/
                        "__wbg_call_89558c3e96703ca1": function(p0i32, p1i32) {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbg_call_89558c3e96703ca1"](p0i32, p1i32);
                            /******/
                        },
                        /******/
                        "__wbg_globalThis_d61b1f48a57191ae": function() {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbg_globalThis_d61b1f48a57191ae"]();
                            /******/
                        },
                        /******/
                        "__wbg_self_e23d74ae45fb17d1": function() {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbg_self_e23d74ae45fb17d1"]();
                            /******/
                        },
                        /******/
                        "__wbg_window_b4be7f48b24ac56e": function() {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbg_window_b4be7f48b24ac56e"]();
                            /******/
                        },
                        /******/
                        "__wbg_global_e7669da72fd7f239": function() {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbg_global_e7669da72fd7f239"]();
                            /******/
                        },
                        /******/
                        "__wbindgen_is_undefined": function(p0i32) {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
                            /******/
                        },
                        /******/
                        "__wbindgen_object_clone_ref": function(p0i32) {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
                            /******/
                        },
                        /******/
                        "__wbindgen_object_drop_ref": function(p0i32) {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
                            /******/
                        },
                        /******/
                        "__wbindgen_throw": function(p0i32, p1i32) {
                            /******/
                            return installedModules["./pkg/index_bg.js"].exports["__wbindgen_throw"](p0i32, p1i32);
                            /******/
                        }/******/
                    }/******/
                };
                /******/
            },
            /******/
        };
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}/******/
            };
            /******/
            /******/
            // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/
            // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/
            // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        // This file contains only the entry chunk.
        /******/
        // The chunk loading function for additional chunks
        /******/
        __webpack_require__.e = function requireEnsure(chunkId) {
            /******/
            var promises = [];
            /******/
            /******/
            /******/
            // JSONP chunk loading for javascript
            /******/
            /******/
            var installedChunkData = installedChunks[chunkId];
            /******/
            if (installedChunkData !== 0) {
                // 0 means "already installed".
                /******/
                /******/
                // a Promise means "currently loading".
                /******/
                if (installedChunkData) {
                    /******/
                    promises.push(installedChunkData[2]);
                    /******/
                } else {
                    /******/
                    // setup Promise in chunk cache
                    /******/
                    var promise = new Promise(function(resolve, reject) {
                            /******/
                            installedChunkData = installedChunks[chunkId] = [resolve, reject];
                            /******/
                        }
                    );
                    /******/
                    promises.push(installedChunkData[2] = promise);
                    /******/
                    /******/
                    // start chunk loading
                    /******/
                    var script = document.createElement('script');
                    /******/
                    var onScriptComplete;
                    /******/
                    /******/
                    script.charset = 'utf-8';
                    /******/
                    script.timeout = 120;
                    /******/
                    if (__webpack_require__.nc) {
                        /******/
                        script.setAttribute("nonce", __webpack_require__.nc);
                        /******/
                    }
                    /******/
                    script.src = jsonpScriptSrc(chunkId);
                    /******/
                    /******/
                    // create error before stack unwound to get useful stacktrace later
                    /******/
                    var error = new Error();
                    /******/
                    onScriptComplete = function(event) {
                        /******/
                        // avoid mem leaks in IE.
                        /******/
                        script.onerror = script.onload = null;
                        /******/
                        clearTimeout(timeout);
                        /******/
                        var chunk = installedChunks[chunkId];
                        /******/
                        if (chunk !== 0) {
                            /******/
                            if (chunk) {
                                /******/
                                var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                                /******/
                                var realSrc = event && event.target && event.target.src;
                                /******/
                                error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                                /******/
                                error.name = 'ChunkLoadError';
                                /******/
                                error.type = errorType;
                                /******/
                                error.request = realSrc;
                                /******/
                                chunk[1](error);
                                /******/
                            }
                            /******/
                            installedChunks[chunkId] = undefined;
                            /******/
                        }
                        /******/
                    }
                    ;
                    /******/
                    var timeout = setTimeout(function() {
                        /******/
                        onScriptComplete({
                            type: 'timeout',
                            target: script
                        });
                        /******/
                    }, 120000);
                    /******/
                    script.onerror = script.onload = onScriptComplete;
                    /******/
                    document.head.appendChild(script);
                    /******/
                }
                /******/
            }
            /******/
            /******/
            // Fetch + compile chunk loading for webassembly
            /******/
            /******/
            var wasmModules = {
                "1": ["./pkg/index_bg.wasm"]
            }[chunkId] || [];
            /******/
            /******/
            wasmModules.forEach(function(wasmModuleId) {
                /******/
                var installedWasmModuleData = installedWasmModules[wasmModuleId];
                /******/
                /******/
                // a Promise means "currently loading" or "already loaded".
                /******/
                if (installedWasmModuleData)
                    /******/
                    promises.push(installedWasmModuleData);
                /******/
                else {
                    /******/
                    var importObject = wasmImportObjects[wasmModuleId]();
                    /******/
                    var req = fetch("/api/match20/wasm");
                    /******/
                    var promise;
                    /******/
                    if (importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
                        /******/
                        promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
                            /******/
                            return WebAssembly.instantiate(items[0], items[1]);
                            /******/
                        });
                        /******/
                    } else if (typeof WebAssembly.instantiateStreaming === 'function') {
                        /******/
                        promise = WebAssembly.instantiateStreaming(req, importObject);
                        /******/
                    } else {
                        /******/
                        var bytesPromise = req.then(function(x) {
                            return x.arrayBuffer();
                        });
                        /******/
                        promise = bytesPromise.then(function(bytes) {
                            /******/
                            return WebAssembly.instantiate(bytes, importObject);
                            /******/
                        });
                        /******/
                    }
                    /******/
                    promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
                        /******/
                        return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
                        /******/
                    }));
                    /******/
                }
                /******/
            });
            /******/
            return Promise.all(promises);
            /******/
        }
        ;
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/
        // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
                /******/
            }
            /******/
        }
        ;
        /******/
        /******/
        // define __esModule on exports
        /******/
        __webpack_require__.r = function(exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        }
        ;
        /******/
        /******/
        // create a fake namespace object
        /******/
        // mode & 1: value is a module id, require it
        /******/
        // mode & 2: merge all properties of value into the ns
        /******/
        // mode & 4: return value when already ns object
        /******/
        // mode & 8|1: behave like require
        /******/
        __webpack_require__.t = function(value, mode) {
            /******/
            if (mode & 1)
                value = __webpack_require__(value);
            /******/
            if (mode & 8)
                return value;
            /******/
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                return value;
            /******/
            var ns = Object.create(null);
            /******/
            __webpack_require__.r(ns);
            /******/
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/
            if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function(key) {
                        return value[key];
                    }
                        .bind(null, key));
            /******/
            return ns;
            /******/
        }
        ;
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ? /******/
                function getDefault() {
                    return module['default'];
                }
                : /******/
                function getModuleExports() {
                    return module;
                }
            ;
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        }
        ;
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }
        ;
        /******/
        /******/
        // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/
        // on error function for async loading
        /******/
        __webpack_require__.oe = function(err) {
            console.error(err);
            throw err;
        }
        ;
        /******/
        /******/
        // object with all WebAssembly.instance exports
        /******/
        __webpack_require__.w = {};
        /******/
        /******/
        var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
        /******/
        var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
        /******/
        jsonpArray.push = webpackJsonpCallback;
        /******/
        jsonpArray = jsonpArray.slice();
        /******/
        for (var i = 0; i < jsonpArray.length; i++)
            webpackJsonpCallback(jsonpArray[i]);
        /******/
        var parentJsonpFunction = oldJsonpFunction;
        /******/
        /******/
        /******/
        // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = "./index.js");
        /******/
    }
)/************************************************************************/
    /******/
    ({

        /***/
        "./index.js": /*!******************!*\
  !*** ./index.js ***!
  \******************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

                    eval("// Note that a dynamic `import` statement here is required due to\n// webpack/webpack#6615, but in theory `import { greet } from './pkg';`\n// will work here one day as well!\nconst rust = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"));\n\nrust.then(m => {\n    window.sign = m.sign\n})\n\n\n//# sourceURL=webpack:///./index.js?");

                    /***/
                }
            )
        /******/
    });



__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */
(function (TextDecoder, module, TextEncoder, global) {
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "sign", function () {
        return sign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_434ce1849eb4e0fc", function () {
        return __wbg_instanceof_Window_434ce1849eb4e0fc;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbg_document_5edd43643d1060d9", function () {
        return __wbg_document_5edd43643d1060d9;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbg_body_7538539844356c1c", function () {
        return __wbg_body_7538539844356c1c;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_f579424187aa1717", function () {
        return __wbg_newnoargs_f579424187aa1717;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbg_call_89558c3e96703ca1", function () {
        return __wbg_call_89558c3e96703ca1;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_d61b1f48a57191ae", function () {
        return __wbg_globalThis_d61b1f48a57191ae;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbg_self_e23d74ae45fb17d1", function () {
        return __wbg_self_e23d74ae45fb17d1;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbg_window_b4be7f48b24ac56e", function () {
        return __wbg_window_b4be7f48b24ac56e;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbg_global_e7669da72fd7f239", function () {
        return __wbg_global_e7669da72fd7f239;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function () {
        return __wbindgen_is_undefined;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function () {
        return __wbindgen_object_clone_ref;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function () {
        return __wbindgen_object_drop_ref;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function () {
        return __wbindgen_throw;
    });
    /* harmony import */
    var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */
        "./pkg/index_bg.wasm");

    const heap = new Array(32).fill(undefined);

    heap.push(undefined, null, true, false);

    function getObject(idx) {
        return heap[idx];
    }

    function _assertBoolean(n) {
        if (typeof (n) !== 'boolean') {
            throw new Error('expected a boolean argument');
        }
    }

    let heap_next = heap.length;

    function addHeapObject(obj) {
        if (heap_next === heap.length)
            heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];

        if (typeof (heap_next) !== 'number')
            throw new Error('corrupt heap');

        heap[idx] = obj;
        return idx;
    }

    function dropObject(idx) {
        if (idx < 36)
            return;
        heap[idx] = heap_next;
        heap_next = idx;
    }

    function takeObject(idx) {
        const ret = getObject(idx);
        dropObject(idx);
        return ret;
    }

    const lTextDecoder = typeof TextDecoder === 'undefined' ? (0,
        module.require)('util').TextDecoder : TextDecoder;

    let cachedTextDecoder = new lTextDecoder('utf-8', {
        ignoreBOM: true,
        fatal: true
    });

    cachedTextDecoder.decode();

    let cachegetUint8Memory0 = null;

    function getUint8Memory0() {
        if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
            cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
        }
        return cachegetUint8Memory0;
    }

    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }

    let WASM_VECTOR_LEN = 0;

    const lTextEncoder = typeof TextEncoder === 'undefined' ? (0,
        module.require)('util').TextEncoder : TextEncoder;

    let cachedTextEncoder = new lTextEncoder('utf-8');

    const encodeString = (typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
                return cachedTextEncoder.encodeInto(arg, view);
            }
            : function (arg, view) {
                const buf = cachedTextEncoder.encode(arg);
                view.set(buf);
                return {
                    read: arg.length,
                    written: buf.length
                };
            }
    );

    function passStringToWasm0(arg, malloc, realloc) {

        if (typeof (arg) !== 'string')
            throw new Error('expected a string argument');

        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length);
            getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len);

        const mem = getUint8Memory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F)
                break;
            mem[ptr + offset] = code;
        }

        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3);
            const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
            const ret = encodeString(arg, view);
            if (ret.read !== arg.length)
                throw new Error('failed to pass whole string');
            offset += ret.written;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    let cachegetInt32Memory0 = null;

    function getInt32Memory0() {
        if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
            cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
        }
        return cachegetInt32Memory0;
    }

    /**
     * @param {string} content
     * @returns {string}
     */
    function sign(content) {
        try {
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](-16);
            var ptr0 = passStringToWasm0(content, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
            var len0 = WASM_VECTOR_LEN;
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["sign"](retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_add_to_stack_pointer"](16);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1);
        }
    }

    function logError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            let error = (function () {
                try {
                    return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
                } catch (_) {
                    return "<failed to stringify thrown value>";
                }
            }());
            console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
            throw e;
        }
    }

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_exn_store"](addHeapObject(e));
        }
    }

    function __wbg_instanceof_Window_434ce1849eb4e0fc() {
        return logError(function (arg0) {
            var ret = getObject(arg0) instanceof Window;
            _assertBoolean(ret);
            return ret;
        }, arguments)
    }
    ;

    function __wbg_document_5edd43643d1060d9() {
        return logError(function (arg0) {
            var ret = getObject(arg0).document;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments)
    }
    ;

    function __wbg_body_7538539844356c1c() {
        return logError(function (arg0) {
            var ret = getObject(arg0).body;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments)
    }
    ;

    function __wbg_newnoargs_f579424187aa1717() {
        return logError(function (arg0, arg1) {
            var ret = new Function(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        }, arguments)
    }
    ;

    function __wbg_call_89558c3e96703ca1() {
        return handleError(function (arg0, arg1) {
            var ret = getObject(arg0).call(getObject(arg1));
            return addHeapObject(ret);
        }, arguments)
    }
    ;

    function __wbg_globalThis_d61b1f48a57191ae() {
        return handleError(function () {
            var ret = globalThis.globalThis;
            return addHeapObject(ret);
        }, arguments)
    }
    ;

    function __wbg_self_e23d74ae45fb17d1() {
        return handleError(function () {
            var ret = self.self;
            return addHeapObject(ret);
        }, arguments)
    }
    ;

    function __wbg_window_b4be7f48b24ac56e() {
        return handleError(function () {
            var ret = window.window;
            return addHeapObject(ret);
        }, arguments)
    }
    ;

    function __wbg_global_e7669da72fd7f239() {
        return handleError(function () {
            var ret = global.global;
            return addHeapObject(ret);
        }, arguments)
    }
    ;

    function __wbindgen_is_undefined(arg0) {
        var ret = getObject(arg0) === undefined;
        _assertBoolean(ret);
        return ret;
    }
    ;

    function __wbindgen_object_clone_ref(arg0) {
        var ret = getObject(arg0);
        return addHeapObject(ret);
    }
    ;

    function __wbindgen_object_drop_ref(arg0) {
        takeObject(arg0);
    }
    ;

    function __wbindgen_throw(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    }
    ;
    /* WEBPACK VAR INJECTION */
}
    .call(this, __webpack_require__(/*! text-encoding */
        "./node_modules/text-encoding/index.js")["TextDecoder"], __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */
        "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! text-encoding */
        "./node_modules/text-encoding/index.js")["TextEncoder"], __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */
        "./node_modules/webpack/buildin/global.js")))
