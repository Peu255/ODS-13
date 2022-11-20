xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("conteudo");

function OdsTxt() {
	for (i=x.length-1;i>=0;i--) {
        document.write("<div class='textdiv'><p id='ods13text'>" + x[i].getElementsByTagName("odstext")[0].childNodes[0].nodeValue + "</p></div>");       
    }
}