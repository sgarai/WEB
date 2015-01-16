//Test comment
function getImageCount(woid) {
    //alert("Inside getImageCount... woid " + woid);
    var xmlHttp = null;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
        ie = false;
    } catch(e) {
        // Internet Explorer
        try {
             xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
             ie = true;
        } catch (e) {
             try {
                  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
                  ie = true;
             } catch (e) {
                  alert("Your browser does not support AJAX!");
                  return;
             }
        }
    }

    xmlHttp.open("POST", "/cgi-bin/getImageCount.pl", true);
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4) {
            xmlDoc=xmlHttp.responseXML;
            var pages = xmlDoc.getElementsByTagName("actual_page_count");
            var actual_page_count = pages[0].childNodes[0].nodeValue;
            //alert("Act Page: " + actual_page_count);
            document.requestDetails.actual_page_count.value = actual_page_count;
        }
    }
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send("WOID=" + woid);
}

