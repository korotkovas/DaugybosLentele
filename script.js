
function start(){
let t=document.createElement("table");
let h=document.createElement("tr");
h.appendChild(document.createElement("th"));
for(let i = 1; i < 10; i++) {
  let th=document.createElement("th");
  th.appendChild(document.createTextNode(i));// cia th  suraso visus 9 virsutinius skaicius.
  h.appendChild(th); 
}
t.appendChild(h);
for (let i = 1; i < 10; i++) {
  let r=document.createElement("tr");
  let d=document.createElement("td");
  d.appendChild(document.createTextNode(i)); // kairysis stulpelis kur nuo 1 iki 9.
  r.appendChild(d); // i kaireji stulpeli pridedam 1 skaiciu
  for (let j = 1; j < 10; j++) {
    d=document.createElement("td");
    d.daugyba = i+"x"+j;
    d.addEventListener("mouseover", detOn);
    d.addEventListener("mouseleave", detOff);
    d.appendChild(document.createTextNode(i*j)); // daugina skaicius
    r.appendChild(d);
  }
  t.appendChild(r);
}
document.getElementById('tablee').appendChild(t);
}
function detOn() {
    document.getElementById("details").appendChild(document.createTextNode(this.daugyba));
}
function detOff() {
    let d = document.getElementById("details");
        d.innerHTML="";
}