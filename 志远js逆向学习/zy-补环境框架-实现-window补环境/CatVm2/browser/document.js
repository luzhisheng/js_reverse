const Document =function Document()
{

}

catvm.safefunction(Document);

Object.defineProperties(Document.prototype,{
    [Symbol.toStringTag]:{
        value:'Document',
        configurable:true,
    }
})

document = {}
document.__proto__ = Document.prototype
document.cookie = ''
document.referrer = location.href || ''
document.getElementById = function getElementById(id){
    return null
}
catvm.safefunction(document.getElementById)
document.addEventListener = function addEventListener(type,listener,useCapture){
    
}
catvm.safefunction(document.addEventListener)

document.createElement = function createElement(tagName){
        let tagname = tagName.toLowerCase() + ''
        if(catvm.memory.htmlElements[tagname] == undefined){
            debugger
        }
        return catvm.proxy(catvm.memory.htmlElements[tagname]())

}
catvm.safefunction(document.createElement)

document = catvm.proxy(document)