ip = "192.168.212.97";
DoneInteria = false;
DoneTVN = false;
DoneOnet = false;
DonePolsat = false;
DoneWP = false;
arrray = [];
k = 0;
feed1 = "https://wydarzenia.interia.pl/feed/";
const sauce1 = "http://" + ip + "/proxify?link=" + feed1;
//promise(sauce1);
feed2 = "https://tvn24.pl/najwazniejsze.xml";
const sauce2 = "http://" + ip + "/proxify?link=" + feed2;
//promise(sauce2);

feed3 = "https://wiadomosci.onet.pl/.feed";
const sauce3 = "http://" + ip + "/proxify?link=" + feed3;
//promise(sauce3);

feed4 = "https://www.polsatnews.pl/rss/wszystkie.xml";
const sauce4 = "http://" + ip + "/proxify?link=" + feed4;
//promise(sauce4);
feed5 = "https://wiadomosci.wp.pl/rss.xml";
const sauce5 = "http://" + ip + "/proxify?link=" + feed5;
//promise(sauce5);



const InteriaCB = document.getElementById("InteriaCB");
InteriaCB.addEventListener("change", choice);
const TVNCB = document.getElementById("TVNCB");
TVNCB.addEventListener("change", choice);
const OnetCB = document.getElementById("OnetCB");
OnetCB.addEventListener("change", choice);
const PolsatCB = document.getElementById("PolsatCB");
PolsatCB.addEventListener("change", choice);
const WPCB = document.getElementById("WPCB");
WPCB.addEventListener("change", choice);

function choice(){
    arrray = [];
    k = 0;
    clean = false;
    if(InteriaCB.checked){
        clean = true;
        promise(sauce1);    
    }
    else{
        DoneInteria = true;
    }
    
    if(TVNCB.checked){
        clean = true;
        promise(sauce2);
    }
    else{
        DoneTVN = true;
    }
    
    if(OnetCB.checked){
        clean = true;
        promise(sauce3);
    }
    else{
        DoneOnet = true;
    }
    
    if(PolsatCB.checked){
        clean = true;
        promise(sauce4);
    }
    else{
        DonePolsat = true;
    }
    
    if(WPCB.checked){
        clean = true;
        promise(sauce5);
    }
    else{
        DoneWP = true;
    }
    if(clean == false){
     document.getElementById("demo1").innerHTML = "";
    }
    
}





/*
feedy
feed5 = "https://wiadomosci.wp.pl/rss.xml";
feed3 = "https://wydarzenia.interia.pl/feed/"; 
feed1 = "https://tvn24.pl/najwazniejsze.xml"; 
feed2 = "https://www.polsatnews.pl/rss/wszystkie.xml"; 
feed = "https://wiadomosci.onet.pl/.feed"; 
*/
//let source = "";

//.then(data => console.log(data)) //debugging


function promise(sauce) {
    return fetch(sauce)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => gigacheck(data,sauce))
        ;

}

function gigacheck(data,source){
    /*
    var checkLink = data.getElementsByTagName("channel");
    
    var kontencik = checkLink[0].getElementsByTagName("link")[0].textContent;
    if(checkLink){
        kontencik == checkLink[0].getElementsByTagName("link")[0].textContent;
    }
    else{
        console.log("nie dziala");
    }
    */
    console.log(source);
    if(source  == "http://" + ip + "/proxify?link=https://www.polsatnews.pl/rss/wszystkie.xml" ){
        FPolsat(data);
    }
    else if(source == "http://" + ip + "/proxify?link=https://wydarzenia.interia.pl/feed/"){
        FInteria(data);
    }
    else if(source == "http://" + ip + "/proxify?link=https://tvn24.pl/najwazniejsze.xml"){
        FTVN(data);
    }
    else if(source == "http://" + ip + "/proxify?link=https://wiadomosci.onet.pl/.feed"){
        FOnet(data);
    }
    else if(source == "http://" + ip + "/proxify?link=https://wiadomosci.wp.pl/rss.xml"){
        FWP(data);
    }
    
    console.log(data);
}
function FInteria(feeed){
    ile = feeed.getElementsByTagName("item");
    suma = "";
    for(let i = 0; i < ile.length; i++){
        
        
        suma += "<div class = 'blok" + "'>";
        suma += "<div id = 'kanalInteria" + "'>"+ "<h1>Interia</h1>" + "</div>";
        suma +="<div id = 'title1" + "'>" + ile[i].getElementsByTagName("title")[0].textContent + "</div>" + "<br>";
        suma += "<div id = 'desc" + "'>" + ile[i].getElementsByTagName("description")[0].textContent + "</div>" + "<br>";
        suma += "<div id = 'link" + "'>" + "<a href ='" + ile[i].getElementsByTagName("link")[0].textContent + "' target=" + "_blank'" + ">Zobacz cały artykuł</a></div>" +"<br>";
        suma += "<div id = 'data" + "'>" + ile[i].getElementsByTagName("pubDate")[0].textContent + "</div>" +"<br>";
        suma += "</div>";
        arrray[k] = suma;
        suma = "";
        k++;
        
    }
     DoneInteria = true;
    final(arrray);
}

function FWP(feeed){
    ile = feeed.getElementsByTagName("item");
    suma = "";
    for(let i = 0; i < ile.length; i++){
        
        
        suma += "<div class = 'blok" + "'>";
        suma += "<div id = 'kanalWP" + "'>"+ "<h1>Wirtualna Polska</h1>" + "</div>";
        suma +="<div id = 'title2" + "'>" + ile[i].getElementsByTagName("title")[0].textContent + "</div>" + "<br>";
        suma += "<div id = 'desc" + "'>" + ile[i].getElementsByTagName("description")[0].textContent + "</div>" + "<br>";
        suma += "<div id = 'link" + "'>" + "<a href ='" + ile[i].getElementsByTagName("link")[0].textContent + "' target=" + "_blank'" + ">Zobacz cały artykuł</a></div>" +"<br>";
        suma += "<div id = 'data" + "'>" + ile[i].getElementsByTagName("pubDate")[0].textContent + "</div>" +"<br>";
        suma += "</div>";
        arrray[k] = suma;
        suma = "";
        k++;
        
    }
     DoneWP = true;
    final(arrray);
}



function FTVN(feeed){
    ile = feeed.getElementsByTagName("item");
    suma = "";
    for(let i = 0; i < ile.length; i++){
        
        
        
       
        suma += "<div class = 'blok"  + "'>";
        suma += "<div id = 'kanalTVN" + "'>"+ "<h1>TVN</h1>" + "</div>";
        suma +="<div id = 'title3" + "'>" + ile[i].getElementsByTagName("title")[0].textContent + "</div>" + "<br>";
        suma += "<div id = 'desc" + "'>" + ile[i].getElementsByTagName("description")[0].textContent + "</div>" + "<br>";
        suma += "<div id = 'link" + "'>" + "<a href ='" + ile[i].getElementsByTagName("link")[0].textContent + "' target=" + "_blank'" + ">Zobacz cały artykuł</a></div>" +"<br>";
        suma += "<div id = 'data" + "'>" + ile[i].getElementsByTagName("pubDate")[0].textContent + "</div>" +"<br>";
        suma += "</div>";
        arrray[k] = suma;
        suma = "";
        k++;    
    }
    // 29
    for(let l = 0; l < 29; l++){
        arrray.pop();
    }
        
     DoneTVN = true;
   final(arrray);
}
function FOnet(feeed){
    ile = feeed.getElementsByTagName("entry");
    suma = "";
    for(let i = 0; i < ile.length; i++){
        
        suma += "<div class = 'blok"  + "'>";
        suma += "<div id = 'kanalOnet" + "'>"+ "<h1>Onet</h1>" + "</div>";
        suma +="<div id = 'title4" + "'>" + ile[i].getElementsByTagName("title")[0].textContent + "</div>" + "<br>";
        suma += "<div id = 'desc" + "'>" + ile[i].getElementsByTagName("summary")[0].textContent + "</div>" + "<br>";
        suma += "<div id = 'link" + "'>" + "<a href ='" + ile[i].getElementsByTagName("link")[0].getAttribute('href') + "' target=" + "_blank'" + ">Zobacz cały artykuł</a></div>" +"<br>";
        suma += "<div id = 'data" + "'>" + ile[i].getElementsByTagName("published")[0].textContent + "</div>" +"<br>";
        suma += "</div>";
        arrray[k] = suma;
        suma = "";
        k++;
        
        
    }
     DoneOnet = true;
    final(arrray);
}

function FPolsat(feeed){
    ile = feeed.getElementsByTagName("item");
    suma = "";
    for(let i = 0; i < ile.length; i++){
        
        suma += "<div class = 'blok"  + "'>";
        suma += "<div id = 'kanalPolsat" + "'>"+ "<h1>Polsat</h1>" + "</div>";
        suma +="<div id = 'title5" + "'>" + ile[i].getElementsByTagName("title")[0].textContent + "</div>" + "<br>";
        const catcherr = ile[i].querySelector('enclosure');
        if (catcherr) {
        suma += "<div id = 'desc" + "'><img src='" + ile[i].getElementsByTagName("enclosure")[0].getAttribute('url')  + "'>";
        }
        suma += ile[i].getElementsByTagName("description")[0].textContent  + "</div>" + "<br>";
        suma += "<div id = 'link" + "'>" + "<a href ='" + ile[i].getElementsByTagName("link")[0].textContent + "' target=" + "_blank'" + ">Zobacz cały artykuł</a></div>" +"<br>";
        suma += "<div id = 'data" + "'>" + ile[i].getElementsByTagName("pubDate")[0].textContent + "</div>" +"<br>";
        suma += "</div>";
        arrray[k] = suma;
        suma = "";
        k++;
        
        
    }
    DonePolsat = true;
    final(arrray);
}
function final(arrray){
    if(DoneInteria == true && DoneTVN == true && DoneOnet == true && DonePolsat == true && DoneWP == true){ 
    const indices = arrray.map((_, i) => i);

// Shuffle the indices array
for (let i = indices.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [indices[i], indices[j]] = [indices[j], indices[i]];
}

// Create a new array of containers in shuffled order
const shuffledContainers = indices.map(i => arrray[i]);
           
    document.getElementById("demo1").innerHTML = shuffledContainers.join("<div id='pause'></div>");
    }
    else{
         document.getElementById("demo1").innerHTML = "";
    }
}


const InteriaCBCheckbox = document.getElementById('InteriaCB');
if (localStorage.getItem('InteriaCBCheckbox') === 'true') {
  InteriaCBCheckbox.checked = true;    
}
else{
     InteriaCBCheckbox.checked = false; 
}
InteriaCBCheckbox.addEventListener('change', () => {
  localStorage.setItem('InteriaCBCheckbox', InteriaCBCheckbox.checked);
});
const TVNCBCheckbox = document.getElementById('TVNCB');
if (localStorage.getItem('TVNCBCheckbox') === 'true') {
  TVNCBCheckbox.checked = true;    
}
else{
     TVNCBCheckbox.checked = false; 
}
TVNCBCheckbox.addEventListener('change', () => {
  localStorage.setItem('TVNCBCheckbox', TVNCBCheckbox.checked);
});
const OnetCBCheckbox = document.getElementById('OnetCB');
if (localStorage.getItem('OnetCBCheckbox') === 'true') {
  OnetCBCheckbox.checked = true;    
}
else{
     OnetCBCheckbox.checked = false; 
}
OnetCBCheckbox.addEventListener('change', () => {
  localStorage.setItem('OnetCBCheckbox', OnetCBCheckbox.checked);
});
const PolsatCBCheckbox = document.getElementById('PolsatCB');
if (localStorage.getItem('PolsatCBCheckbox') === 'true') {
  PolsatCBCheckbox.checked = true;    
}
else{
     PolsatCBCheckbox.checked = false; 
}
PolsatCBCheckbox.addEventListener('change', () => {
  localStorage.setItem('PolsatCBCheckbox', PolsatCBCheckbox.checked);
});
const WPCBCheckbox = document.getElementById('WPCB');
if (localStorage.getItem('WPCBCheckbox') === 'true') {
  WPCBCheckbox.checked = true;    
}
else{
     WPCBCheckbox.checked = false; 
}
WPCBCheckbox.addEventListener('change', () => {
  localStorage.setItem('WPCBCheckbox', WPCBCheckbox.checked);
});
  
    

choice();
// TODO LIST

