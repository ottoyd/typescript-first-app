"use strict";exports.id=947,exports.ids=[947],exports.modules={947:(t,e,n)=>{n.r(e);var r=n(978),o=n(479),a=(n(270),n(607));describe("Unit Test Product",(function(){it("should GET",(function(){return t=void 0,e=void 0,i=function(){var t;return function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}(this,(function(e){switch(e.label){case 0:return[4,(0,o.agent)(a.Z).get("/api/products/")];case 1:return t=e.sent(),(0,r.expect)(t.status).to.equal(200),(0,r.expect)(t.type).to.equal("application/json"),(0,r.expect)(t.body).to.be.an("array"),[2]}}))},new((n=void 0)||(n=Promise))((function(r,o){function a(t){try{c(i.next(t))}catch(t){o(t)}}function u(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((i=i.apply(t,e||[])).next())}));var t,e,n,i}))}))}};