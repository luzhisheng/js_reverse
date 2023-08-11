const EventTarget =function EventTarget()
{

}
catvm.safefunction(EventTarget);

Object.defineProperties(EventTarget.prototype,{
    [Symbol.toStringTag]:{
        value:'EventTarget',
        configurable:true,
    }
})
EventTarget.prototype.addEventListener = function addEventListener(type,callback){
    if(!(type in catvm.memory.listeners)){
        catvm.memory.listeners[type] = []
    }
    catvm.memory.listeners[type].push(callback)
}
catvm.safefunction(EventTarget.prototype.addEventListener);
EventTarget.prototype.dispatchEvent = function dispatchEvent(){

}
catvm.safefunction(EventTarget.prototype.dispatchEvent);
EventTarget.prototype.removeEventListener = function removeEventListener(){

}
catvm.safefunction(EventTarget.prototype.removeEventListener);