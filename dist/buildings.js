(function(r){function g(a,b,c,d){this.r=a;this.g=b;this.b=c;this.a=4>arguments.length?1:d}function ma(a){k=r.document.createElement("canvas");k.style.webkitTransform="translate3d(0,0,0)";k.style.position="absolute";k.style.pointerEvents="none";k.style.left=0;k.style.top=0;k.style.imageRendering="optimizeSpeed";a.appendChild(k);l=k.getContext("2d");l.lineCap="round";l.lineJoin="round";l.lineWidth=1;try{l.mozImageSmoothingEnabled=!1}catch(b){}}function N(a,b){var c={},a=a/T,b=b/T;c[u]=0>=b?90:1<=b?
-90:na*(2*oa(pa(v*(1-2*b)))-ca);c[A]=360*(1===a?1:(a%1+1)%1)-180;return c}function qa(a,b){return a.replace(/\{ *([\w_]+) *\}/g,function(a,d){return b[d]||""})}function ra(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4!==c.readyState||!c.status||200>c.status||299<c.status||c.responseText&&b(JSON.parse(c.responseText))};c.open("GET",a);c.send(null);return c}function U(){if(V&&!(w<O)){var a=N(H-s,I-W),b=N(H+B+s,I+x+W);P&&P.abort();P=ra(qa(V,{w:a[A],n:a[u],e:b[A],s:b[u],z:w}),sa)}}function da(a,
b,c){var c=c||[],d=a[0]?a:a.features,f,i,e,J=b?1:0,h=b?0:1;if(d){a=0;for(f=d.length;a<f;a++)da(d[a],b,c);return c}"Feature"===a.type&&(f=a.geometry,i=a.properties);if("Polygon"==f.type){d=f.coordinates[0];b=[];a=e=0;for(f=d.length;a<f;a++)b.push(d[a][J]),b.push(d[a][h]),e+=d[a][2]||0;if(e){J=[];J[C]=~~(e/d.length);h=z;var o=0,p,j;p=0;for(j=b.length;p<j-3;p+=2)a=b[p],f=b[p+1],d=b[p+2],e=b[p+3],o+=a*e-d*f;console.log(o);a=0<o/2?"CW":"CCW";console.log(a);if("CW"!==a){a=[];for(f=b.length-2;0<=f;f-=2)a.push(b[f]),
a.push(b[f+1]);b=a}J[h]=b;i.color&&(i=g.parse(i.color),J[D]=[i,i.adjustLightness(0.2)]);c.push(J)}}return c}function ea(a,b,c){var d,f,i=[],e,j,h,o,p,g,k,l=X-b;e=0;for(j=a.length;e<j;e++){p=a[e];g=p[z];k=new Int32Array(g.length);h=0;for(o=g.length-1;h<o;h+=2){d=g[h+1];f=fa<<b;var m=Y(1,ta(0,0.5-ua(va(wa+ca*g[h]/180))/v/2));d=~~((d/360+0.5)*f);f=~~(m*f);k[h]=d;k[h+1]=f}i[e]=[];i[e][C]=Y(p[C]>>l,ga);i[e][z]=k;i[e][D]=p[D];i[e][Q]=c}return i}function ha(a,b){B=a;x=b;s=~~(B/2);W=~~(x/2);E=s;F=x;k.width=
B;k.height=x}function ia(a,b){H=a;I=b}function ja(a){w=a;T=fa<<w;K=1-0.3*(w-O)/(X-O)}function xa(){Z=!0;t()}function sa(a){var b,c,d,f=[],i=0,e=0;P=null;if(a&&a.meta.z===w){d=a.meta;c=a.data;if(n&&j&&n.z===d.z){i=n.x-d.x;e=n.y-d.y;a=0;for(b=j.length;a<b;a++)f[a]=j[a][z][0]+i+","+(j[a][z][1]+e)}n=d;j=[];a=0;for(b=c.length;a<b;a++)j[a]=c[a],j[a][C]=Y(j[a][C],ga),d=j[a][z][0]+","+j[a][z][1],j[a][Q]=!(f&&~f.indexOf(d));ka()}}function ka(){M=0;clearInterval($);$=setInterval(function(){M+=0.1;if(1<M){clearInterval($);
M=1;for(var a=0,b=j.length;a<b;a++)j[a][Q]=0}t()},33)}function t(){var a,b,c,d;l.clearRect(0,0,B,x);if(n&&j&&!(w<O||Z)){var f,i,e,g,h,o,k=H-n.x,t=I-n.y,y,s,m,q,r,u,v,A=R.adjustAlpha(K),G=la.adjustAlpha(K);S&&(l.strokeStyle=ya.adjustAlpha(K)+"");f=0;for(i=j.length;f<i;f++){h=j[f];d=!1;a=h[z];y=new Int32Array(a.length);e=0;for(g=a.length-1;e<g;e+=2)y[e]=b=a[e]-k,y[e+1]=c=a[e+1]-t,d||(d=0<b&&b<B&&0<c&&c<x);if(d){l.fillStyle=(h[D]?h[D][0].adjustAlpha(K):A)+"";e=h[Q]?h[C]*M:h[C];o=aa/(aa-e);s=new Int32Array(y.length-
2);m=[];e=0;for(g=y.length-3;e<g;e+=2)q=y[e],r=y[e+1],u=y[e+2],v=y[e+3],c=~~((q-E)*o+E),d=~~((r-F)*o+F),a=~~((u-E)*o+E),b=~~((v-F)*o+F),(u-q)*(d-r)>(c-q)*(v-r)?(m.length||(m.unshift(r),m.unshift(q),m.push(c),m.push(d)),m.unshift(v),m.unshift(u),m.push(a),m.push(b)):(ba(m),m=[]),s[e]=c,s[e+1]=d;ba(m);l.fillStyle=(h[D]?h[D][1].adjustAlpha(K):G)+"";ba(s,S)}}}}function ba(a,b){if(a.length){l.beginPath();l.moveTo(a[0],a[1]);for(var c=2,d=a.length;c<d;c+=2)l.lineTo(a[c],a[c+1]);l.closePath();b&&l.stroke();
l.fill()}}r.Int32Array=r.Int32Array||r.Array;g.prototype.toString=function(){return"rgba("+[this.r,this.g,this.b,this.a].join()+")"};g.prototype.adjustLightness=function(a){var b=g.toHSLA(this);b.l+=a;b.l=Math.min(1,Math.max(0,b.l));return g.toRGB(b)};g.prototype.adjustAlpha=function(a){return new g(this.r,this.g,this.b,this.a*a)};g.parse=function(a){if(~a.indexOf("#"))return a=a.match(/^#?(\w{2})(\w{2})(\w{2})$/),new g(parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16));a=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/);
return new g(a[1],a[2],a[3],a[4]?a[5]:1)};g.toHSLA=function(a){var b=a.r/255,c=a.g/255,d=a.b/255,f=Math.max(b,c,d),i=Math.min(b,c,d),e,g=(f+i)/2,h;if(f==i)e=i=0;else{h=f-i;i=0.5<g?h/(2-f-i):h/(f+i);switch(f){case b:e=(c-d)/h+(c<d?6:0);break;case c:e=(d-b)/h+2;break;case d:e=(b-c)/h+4}e/=6}return{h:e,s:i,l:g,a:a.a}};g.toRGB=function(a){var b,c,d;if(0==a.s)b=c=d=a.l;else{d=0.5>a.l?a.l*(1+a.s):a.l+a.s-a.l*a.s;var f=2*a.l-d;b=g.hueToRGB(f,d,a.h+1/3);c=g.hueToRGB(f,d,a.h);d=g.hueToRGB(f,d,a.h-1/3)}return new g(~~(255*
b),~~(255*c),~~(255*d),a.a)};g.hueToRGB=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};var pa=Math.exp,ua=Math.log,va=Math.tan,oa=Math.atan,Y=Math.min,ta=Math.max,v=Math.PI,ca=v/2,wa=v/4,na=180/v,u="latitude",A="longitude",C=0,z=1,D=2,Q=3,B=0,x=0,s=0,W=0,H=0,I=0,w,T,P,k,l,V,S,R=new g(200,190,180),la=R.adjustLightness(0.2),ya=new g(145,140,135),G,n,j,K=1,M=1,$,fa=256,O=14,X,E,F,aa=400,ga=aa-50,Z=!1,q=r.OSMBuildings=function(a){this.addTo(a)};q.prototype.VERSION=
"0.1a";q.prototype.render=function(){this.map&&t();return this};q.prototype.setStyle=function(a){this.map&&(a=a||{},S=void 0!==a.strokeRoofs?a.strokeRoofs:S,a.fillColor&&(R=g.parse(a.fillColor),la=R.adjustLightness(0.2)),t());return this};q.prototype.setData=function(a,b){this.map&&(a?(G=da(a,b),n={n:90,w:-180,s:-90,e:180,x:0,y:0,z:w},j=ea(G,w,!0),ka()):(G=null,t()));return this};q.prototype.loadData=function(a){this.map&&(V=a,U());return this};(function(a){var b,c,d,f;a.VERSION+="-leaflet";a.addTo=
function(a){a.addLayer(this);return this};a.onAdd=function(a){this.map=a;ma(a._panes.overlayPane);X=a._layersMaxZoom;ha(a._size.x,a._size.y);var e=a.getPixelOrigin();ia(e.x,e.y);ja(a._zoom);var g=0,h=0;b=function(){var b=L.DomUtil.getPosition(a._mapPane);E=s-(b.x-g);F=x-(b.y-h);t()};c=function(){var b=L.DomUtil.getPosition(a._mapPane);g=b.x;h=b.y;k.style.left=-b.x+"px";k.style.top=-b.y+"px";E=s;F=x;ha(a._size.x,a._size.y);var c=a.getPixelOrigin();ia(c.x-b.x,c.y-b.y);b=N(H,I);c=N(H+B,I+x);n&&(b[u]>
n.n||b[A]<n.w||c[u]<n.s||c[A]>n.e)&&U();t()};d=xa;f=function(){var b=a._zoom;Z=!1;ja(b);G?(j=ea(G,w),t()):U()};a.on({move:b,moveend:c,zoomstart:d,zoomend:f});a.options.zoomAnimation&&(k.className="leaflet-zoom-animated");a.attributionControl.addAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');t()};a.onRemove=function(a){a.attributionControl.removeAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({move:b,moveend:c,zoomstart:d,
zoomend:f});k.parentNode.removeChild(k);this.map=null}})(q.prototype)})(this);
