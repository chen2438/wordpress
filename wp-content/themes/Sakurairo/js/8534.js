(()=>{var t={4119:(t,i,e)=>{var s=e(6279);t.exports={name:"lab",min:[0,-100,-100],max:[100,100,100],channel:["lightness","a","b"],alias:["LAB","cielab"],xyz:function(t){var i,e,s,a,n=t[0],r=t[1],h=t[2];return n<=8?a=(e=100*n/903.3)/100*7.787+16/116:(e=100*Math.pow((n+16)/116,3),a=Math.pow(e/100,1/3)),[i=i/95.047<=.008856?i=95.047*(r/500+a-16/116)/7.787:95.047*Math.pow(r/500+a,3),e,s=s/108.883<=.008859?s=108.883*(a-h/200-16/116)/7.787:108.883*Math.pow(a-h/200,3)]}},s.lab=function(t){var i=t[0],e=t[1],s=t[2];return e/=100,s/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(i-e),200*(e-(s=s>.008856?Math.pow(s,1/3):7.787*s+16/116))]}},2513:t=>{t.exports={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]}},6279:(t,i,e)=>{var s=e(2513),a={name:"xyz",min:[0,0,0],channel:["X","Y","Z"],alias:["XYZ","ciexyz","cie1931"],whitepoint:{2:{A:[109.85,100,35.585],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.045592705167,100,108.9057750759878],D75:[94.972,100,122.638],F2:[99.187,100,67.395],F7:[95.044,100,108.755],F11:[100.966,100,64.37],E:[100,100,100]},10:{A:[111.144,100,35.2],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F2:[103.28,100,69.026],F7:[95.792,100,107.687],F11:[103.866,100,65.627],E:[100,100,100]}}};a.max=a.whitepoint[2].D65,a.rgb=function(t,i){i=i||a.whitepoint[2].E;var e,s,n,r=t[0]/i[0],h=t[1]/i[1],o=t[2]/i[2];return s=-.96924363628087*r+1.87596750150772*h+.041555057407175*o,n=.055630079696993*r+-.20397695888897*h+1.056971514242878*o,e=(e=3.240969941904521*r+-1.537383177570093*h+-.498610760293*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,s=s>.0031308?1.055*Math.pow(s,1/2.4)-.055:s*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(s=Math.min(Math.max(0,s),1)),255*(n=Math.min(Math.max(0,n),1))]},s.xyz=function(t,i){var e=t[0]/255,s=t[1]/255,n=t[2]/255,r=.21263900587151*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.71516867876775*(s=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92)+.072192315360733*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92),h=.019330818715591*e+.11919477979462*s+.95053215224966*n;return[(.41239079926595*e+.35758433938387*s+.18048078840183*n)*(i=i||a.whitepoint[2].E)[0],r*i[1],h*i[2]]},t.exports=a},2900:t=>{t.exports=function(t){function i(t,i,e,s){function a(i){"function"!=typeof self.postMessage?t.ports[0].postMessage(i):self.postMessage(i)}e?("undefined"!=typeof console&&"error"in console&&console.error("Worker caught an error:",e),a([i,{message:e.message}])):a([i,null,s])}self.addEventListener("message",(function(e){var s=e.data;if(Array.isArray(s)&&2===s.length){var a=s[0],n=s[1];"function"!=typeof t?i(e,a,new Error("Please pass a function into register().")):function(t,e,s,a){var n,r=function(t,i){try{return{res:t(i)}}catch(t){return{err:t}}}(e,a);r.err?i(t,s,r.err):!(n=r.res)||"object"!=typeof n&&"function"!=typeof n||"function"!=typeof n.then?i(t,s,null,r.res):r.res.then((function(e){i(t,s,null,e)}),(function(e){i(t,s,e)}))}(e,t,a,n)}}))}}},i={};function e(s){var a=i[s];if(void 0!==a)return a.exports;var n=i[s]={exports:{}};return t[s](n,n.exports,e),n.exports}e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),(()=>{const t=3*Math.max(499,491,487,503),i={ncycles:100,netsize:256,samplefac:10};class s{constructor(t,e){if(function(t){for(let i=1,e=arguments.length;i<e;i++){const e=arguments[i];if(null!=e)for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}}(this,i,{pixels:t},e),this.netsize<4||this.netsize>256)throw new Error("Color count must be between 4 and 256");if(this.samplefac<1||this.samplefac>30)throw new Error("Sampling factor must be between 1 and 30");this.maxnetpos=this.netsize-1,this.netbiasshift=4,this.intbiasshift=16,this.intbias=1<<this.intbiasshift,this.gammashift=10,this.gamma=1<<this.gammashift,this.betashift=10,this.beta=this.intbias>>this.betashift,this.betagamma=this.beta*this.gamma,this.initrad=this.netsize>>3,this.radiusbiasshift=6,this.radiusbias=1<<this.radiusbiasshift,this.initradius=this.initrad*this.radiusbias,this.radiusdec=30,this.alphabiasshift=10,this.initalpha=1<<this.alphabiasshift,this.radbiasshift=8,this.radbias=1<<this.radbiasshift,this.alpharadbshift=this.alphabiasshift+this.radbiasshift,this.alpharadbias=1<<this.alpharadbshift,this.network=[],this.netindex=new Uint32Array(256),this.bias=new Uint32Array(this.netsize),this.freq=new Uint32Array(this.netsize),this.radpower=new Uint32Array(this.netsize>>3);for(let t=0,i=this.netsize;t<i;t++){let i=(t<<this.netbiasshift+8)/this.netsize;this.network[t]=new Float64Array([i,i,i,0]),this.freq[t]=this.intbias/this.netsize,this.bias[t]=0}}unbiasnet(){for(let t=0,i=this.netsize;t<i;t++)this.network[t][0]>>=this.netbiasshift,this.network[t][1]>>=this.netbiasshift,this.network[t][2]>>=this.netbiasshift,this.network[t][3]=t}altersingle(t,i,e,s,a){this.network[i][0]-=t*(this.network[i][0]-e)/this.initalpha,this.network[i][1]-=t*(this.network[i][1]-s)/this.initalpha,this.network[i][2]-=t*(this.network[i][2]-a)/this.initalpha}alterneigh(t,i,e,s,a){const n=Math.abs(i-t),r=Math.min(i+t,this.netsize);let h=i+1,o=i-1,l=1;for(;h<r||o>n;){const t=this.radpower[l++];if(h<r){const i=this.network[h++];i[0]-=t*(i[0]-e)/this.alpharadbias,i[1]-=t*(i[1]-s)/this.alpharadbias,i[2]-=t*(i[2]-a)/this.alpharadbias}if(o>n){const i=this.network[o--];i[0]-=t*(i[0]-e)/this.alpharadbias,i[1]-=t*(i[1]-s)/this.alpharadbias,i[2]-=t*(i[2]-a)/this.alpharadbias}}}contest(t,i,e){let s=~(1<<31),a=s,n=-1,r=n;for(let h=0,o=this.netsize;h<o;h++){let o=this.network[h],l=Math.abs(o[0]-t)+Math.abs(o[1]-i)+Math.abs(o[2]-e);l<s&&(s=l,n=h);let f=l-(this.bias[h]>>this.intbiasshift-this.netbiasshift);f<a&&(a=f,r=h);let p=this.freq[h]>>this.betashift;this.freq[h]-=p,this.bias[h]+=p<<this.gammashift}return this.freq[n]+=this.beta,this.bias[n]-=this.betagamma,r}inxbuild(){let t=0,i=0;for(let e=0,s=this.netsize;e<s;e++){let a=this.network[e],n=null,r=e,h=a[1];for(let t=e+1;t<s;t++)n=this.network[t],n[1]<h&&(r=t,h=n[1]);if(n=this.network[r],e!==r&&([a[0],n[0]]=[n[0],a[0]],[a[1],n[1]]=[n[1],a[1]],[a[2],n[2]]=[n[2],a[2]],[a[3],n[3]]=[n[3],a[3]]),h!==t){this.netindex[t]=i+e>>1;for(let i=t+1;i<h;i++)this.netindex[i]=e;t=h,i=e}}this.netindex[t]=i+this.maxnetpos>>1;for(let i=t+1;i<256;i++)this.netindex[i]=this.maxnetpos}learn(){const i=this.pixels.length,e=30+(this.samplefac-1)/3,s=i/(3*this.samplefac);let a,n=s/this.ncycles|0,r=this.initalpha,h=this.initradius,o=h>>this.radiusbiasshift;o<=1&&(o=0);for(let t=0;t<o;t++)this.radpower[t]=r*((o*o-t*t)*this.radbias/(o*o));i<t?(this.samplefac=1,a=3):a=i%499!=0?1497:i%491!=0?1473:i%487!=0?1461:1509;let l=0;for(let t=0;t<s;){let s=(255&this.pixels[l])<<this.netbiasshift,f=(255&this.pixels[l+1])<<this.netbiasshift,p=(255&this.pixels[l+2])<<this.netbiasshift,u=this.contest(s,f,p);if(this.altersingle(r,u,s,f,p),0!==o&&this.alterneigh(o,u,s,f,p),l+=a,l>=i&&(l-=i),0===n&&(n=1),++t%n==0){r-=r/e,h-=h/this.radiusdec,o=h>>this.radiusbiasshift,o<=1&&(o=0);for(let t=0;t<o;t++)this.radpower[t]=r*((o*o-t*t)*this.radbias/(o*o))}}}buildColorMap(){this.learn(),this.unbiasnet(),this.inxbuild()}getColorMap(){const t=new Buffer(3*this.netsize),i=new Buffer(this.netsize);for(let t=0,e=this.netsize;t<e;t++)i[this.network[t][3]]=t;for(let e=0,s=0,a=0,n=this.netsize;e<n;e++)a=i[e],t[s++]=255&this.network[a][0],t[s++]=255&this.network[a][1],t[s++]=255&this.network[a][2];return t}}Math.max(499,491,487,503);function a(t,i,e,s){for(var a=0,n=16777216,r=0,h=t.length;r<h;){var o=i-t[r++],l=e-t[r++],f=s-t[r],p=o*o+l*l+f*f;p<n&&(n=p,a=r/3|0),r++}return a}function n(t,i){for(var e=new Buffer(t.length/3),s={},n=0,r=0,h=t.length;n<h;){var o=t[n++],l=t[n++],f=t[n++],p=o<<16|l<<8|f;e[r++]=p in s?s[p]:s[p]=a(i,o,l,f)}return e}e(2513),e(6279),e(4119);function r(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,s=new Array(i);e<i;e++)s[e]=t[e];return s}function h(t,i){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,i){if(t){if("string"==typeof t)return r(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){e&&(t=e);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,i){for(var e,s=new Array(t).fill(0),a=h(i);!(e=a()).done;)s[e.value]++;return s}var l=e(2900);e.n(l)()((t=>{const{img:i,k:e}=t,a=function(t,i,e){void 0===e&&(e=1);var a=function(t){for(var i=new Uint8ClampedArray(t.length/4*3),e=0,s=0,a=t.length;s<a;){for(var n=0;n<3;n++)i[e++]=t[s++];s++}return i}(t),r=new s(a,{netsize:i,samplefac:e});r.buildColorMap();for(var h=r.getColorMap(),l=n(a,h),f=[],p=0,u=h.length;p<u;)f.push([h[p++],h[p++],h[p++],255]);return{centroid:f,label:o(i,l)}}(i.data,e);return a}))})()})();
//# sourceMappingURL=8534.js.map