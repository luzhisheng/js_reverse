const Storage =function Storage()
{
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Storage);

Object.defineProperties(Storage.prototype,{
    [Symbol.toStringTag]:{
        value:'Storage',
        configurable:true,
    }
})

Storage.prototype.length=0; 
Storage.prototype.clear=function clear(){
    debugger
    let temp = Object.keys(this)
    for(let key =0 ;key<temp.length;key++){
        delete this[key]
    }
}; catvm.safefunction(Storage.prototype.clear); 
Storage.prototype.getItem=function getItem(k){
    debugger
    return this[k]
    return
}; catvm.safefunction(Storage.prototype.getItem); 
Storage.prototype.key=function key(){
    debugger
    return Object.keys(this)[index]
}; catvm.safefunction(Storage.prototype.key); 
Storage.prototype.removeItem=function removeItem(k){
    debugger
    delete this[k]
}; catvm.safefunction(Storage.prototype.removeItem); 
Storage.prototype.setItem=function setItem(k,v){
    debugger
    this[k] = v
}; catvm.safefunction(Storage.prototype.setItem);

Storage.prototype.__defineGetter__('length',function length(){
    return Object.keys(this).length
})

localStorage = {}
localStorage.__proto__ = Storage.prototype
localStorage = catvm.proxy(localStorage)

sessionStorage = {}
sessionStorage.__proto__ = Storage.prototype
sessionStorage = catvm.proxy(sessionStorage)