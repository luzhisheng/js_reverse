// The module cache
var installedModules = {};

var installedChunks = {
    "main": 0
};

var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ "./pkg/index_bg.wasm");

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

function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
        /******/            i: moduleId,
        /******/            l: false,
        /******/            exports: {}
        /******/
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
}

console.log(sign("1|1654054123000"));