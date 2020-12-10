function getQueryVariable(e){
for(var t=window.location.search.substring(1),n=t.split("&"),r=0;r<n.length;r++){
var a=n[r].split("=");
if(a[0]==e)return a[1]
}return!1
}
function w1024(){
var e=getQueryVariable("redirectlink").replace(/%3D/g,"=");
var ThisNewTab = window.open(e,'_self');
ThisNewTab.location;
}
function w960(){
var e=getQueryVariable("redirectlink").replace(/%3D/g,"=");
var ThisNewTab = window.open(e,'_self');
ThisNewTab.location;
}
function w600(){
var e=getQueryVariable("redirectlink").replace(/%3D/g,"=");
var ThisNewTab = window.open(e,'_self');
ThisNewTab.location;
}
function w414(){
var e=getQueryVariable("redirectlink").replace(/%3D/g,"=");
var ThisNewTab = window.open(e,'_self');
ThisNewTab.location;
}
function w736(){
var e=getQueryVariable("redirectlink").replace(/%3D/g,"=");
var ThisNewTab = window.open(e,'_self');
ThisNewTab.location;
}
function w320(){
var e=getQueryVariable("redirectlink").replace(/%3D/g,"=");
var ThisNewTab = window.open(e,'_self');
ThisNewTab.location;
}
function w480(){
var e=getQueryVariable("redirectlink").replace(/%3D/g,"=");
var ThisNewTab = window.open(e,'_self');
ThisNewTab.location;
}
function refresh(){
location.reload()
}
window.onload=function(){
var e=getQueryVariable("redirectlink").replace(/%3D/g,"=");
var ThisNewTab = window.open(e,'_self');
ThisNewTab.location;
};
