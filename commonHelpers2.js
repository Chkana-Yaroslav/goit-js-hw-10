import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-651d7991.js";document.addEventListener("DOMContentLoaded",function(){document.querySelector(".form").addEventListener("submit",function(o){o.preventDefault();const t=parseInt(document.querySelector('[name="delay"]').value),i=document.querySelector('[name="state"]:checked').value;new Promise((e,n)=>{setTimeout(()=>{i==="fulfilled"?e(t):n(t)},t)}).then(e=>{s.success({title:"Fulfilled promise",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{s.error({title:"Rejected promise",message:`❌ Rejected promise in ${e}ms`})})})});
//# sourceMappingURL=commonHelpers2.js.map