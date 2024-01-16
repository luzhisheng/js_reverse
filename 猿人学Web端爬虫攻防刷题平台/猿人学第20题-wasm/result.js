__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(TextDecoder, module, TextEncoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_434ce1849eb4e0fc", function() { return __wbg_instanceof_Window_434ce1849eb4e0fc; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_document_5edd43643d1060d9", function() { return __wbg_document_5edd43643d1060d9; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_body_7538539844356c1c", function() { return __wbg_body_7538539844356c1c; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_f579424187aa1717", function() { return __wbg_newnoargs_f579424187aa1717; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_89558c3e96703ca1", function() { return __wbg_call_89558c3e96703ca1; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_d61b1f48a57191ae", function() { return __wbg_globalThis_d61b1f48a57191ae; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_e23d74ae45fb17d1", function() { return __wbg_self_e23d74ae45fb17d1; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_b4be7f48b24ac56e", function() { return __wbg_window_b4be7f48b24ac56e; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_e7669da72fd7f239", function() { return __wbg_global_e7669da72fd7f239; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return __wbindgen_is_undefined; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return __wbindgen_object_clone_ref; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
  /* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ "./pkg/index_bg.wasm");


  const heap = new Array(32).fill(undefined);

  heap.push(undefined, null, true, false);

  function getObject(idx) { return heap[idx]; }

  function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
      throw new Error('expected a boolean argument');
    }
  }

  let heap_next = heap.length;

  function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
  }

  function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
  }

  function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
  }

  const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

  let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

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

  const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

  let cachedTextEncoder = new lTextEncoder('utf-8');

  const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
      ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
      }
      : function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
          read: arg.length,
          written: buf.length
        };
      });

  function passStringToWasm0(arg, malloc, realloc) {

    if (typeof(arg) !== 'string') throw new Error('expected a string argument');

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
      if (code > 0x7F) break;
      mem[ptr + offset] = code;
    }

    if (offset !== len) {
      if (offset !== 0) {
        arg = arg.slice(offset);
      }
      ptr = realloc(ptr, len, len = offset + arg.length * 3);
      const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
      const ret = encodeString(arg, view);
      if (ret.read !== arg.length) throw new Error('failed to pass whole string');
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
        } catch(_) {
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

  function __wbg_instanceof_Window_434ce1849eb4e0fc() { return logError(function (arg0) {
    var ret = getObject(arg0) instanceof Window;
    _assertBoolean(ret);
    return ret;
  }, arguments) };

  function __wbg_document_5edd43643d1060d9() { return logError(function (arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  }, arguments) };

  function __wbg_body_7538539844356c1c() { return logError(function (arg0) {
    var ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  }, arguments) };

  function __wbg_newnoargs_f579424187aa1717() { return logError(function (arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  }, arguments) };

  function __wbg_call_89558c3e96703ca1() { return handleError(function (arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
  }, arguments) };

  function __wbg_globalThis_d61b1f48a57191ae() { return handleError(function () {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
  }, arguments) };

  function __wbg_self_e23d74ae45fb17d1() { return handleError(function () {
    var ret = self.self;
    return addHeapObject(ret);
  }, arguments) };

  function __wbg_window_b4be7f48b24ac56e() { return handleError(function () {
    var ret = window.window;
    return addHeapObject(ret);
  }, arguments) };

  function __wbg_global_e7669da72fd7f239() { return handleError(function () {
    var ret = global.global;
    return addHeapObject(ret);
  }, arguments) };

  function __wbindgen_is_undefined(arg0) {
    var ret = getObject(arg0) === undefined;
    _assertBoolean(ret);
    return ret;
  };

  function __wbindgen_object_clone_ref(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
  };

  function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
  };

  function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };


  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ "./node_modules/text-encoding/index.js")["TextDecoder"], __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! text-encoding */ "./node_modules/text-encoding/index.js")["TextEncoder"], __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

//# sourceURL=webpack:///./pkg/index_bg.js?