import pywasm
vm = pywasm.load("./main.wasm")
r = vm.exec("encode", [12312431240, 312431423214])
print(r)
