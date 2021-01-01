//download.js v4.21, by dandavis; 2008-2018. [MIT] see http://danml.com/download.html for tests/usage
;(function(root,factory){typeof define=='function'&&define.amd?define([],factory):typeof exports=='object'?module.exports=factory():root.download=factory()})(this,function(){return function download(data,strFileName,strMimeType){var self=window,defaultMime='application/octet-stream',mimeType=strMimeType||defaultMime,payload=data,url=!strFileName&&!strMimeType&&payload,anchor=document.createElement('a'),toString=function(a){return String(a)},myBlob=self.Blob||self.MozBlob||self.WebKitBlob||toString,fileName=strFileName||'download',blob,reader;myBlob=myBlob.call?myBlob.bind(self):Blob,String(this)==='true'&&(payload=[payload,mimeType],mimeType=payload[0],payload=payload[1]);if(url&&url.length<2048){fileName=url.split('/').pop().split('?')[0],anchor.href=url;if(anchor.href.indexOf(url)!==-1){var ajax=new XMLHttpRequest;return ajax.open('GET',url,!0),ajax.responseType='blob',ajax.onload=function(e){download(e.target.response,fileName,defaultMime)},setTimeout(function(){ajax.send()},0),ajax}}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){if(!(payload.length>2096103.424&&myBlob!==toString))return navigator.msSaveBlob?navigator.msSaveBlob(dataUrlToBlob(payload),fileName):saver(payload);payload=dataUrlToBlob(payload),mimeType=payload.type||defaultMime}else if(/([\x80-\xff])/.test(payload)){var i=0,tempUiArr=new Uint8Array(payload.length),mx=tempUiArr.length;for(i;i<mx;++i)tempUiArr[i]=payload.charCodeAt(i);payload=new myBlob([tempUiArr],{type:mimeType})}blob=payload instanceof myBlob?payload:new myBlob([payload],{type:mimeType});function dataUrlToBlob(strUrl){var parts=strUrl.split(/[:;,]/),type=parts[1],indexDecoder=strUrl.indexOf('charset')>0?3:2,decoder=parts[indexDecoder]=='base64'?atob:decodeURIComponent,binData=decoder(parts.pop()),mx=binData.length,i=0,uiArr=new Uint8Array(mx);for(i;i<mx;++i)uiArr[i]=binData.charCodeAt(i);return new myBlob([uiArr],{type:type})}function saver(url,winMode){if('download'in anchor)return anchor.href=url,anchor.setAttribute('download',fileName),anchor.className='download-js-link',anchor.innerHTML='downloading...',anchor.style.display='none',anchor.addEventListener('click',function(e){e.stopPropagation(),this.removeEventListener('click',arguments.callee)}),document.body.appendChild(anchor),setTimeout(function(){anchor.click(),document.body.removeChild(anchor),winMode===!0&&setTimeout(function(){self.URL.revokeObjectURL(anchor.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(url)&&(url='data:'+url.replace(/^data:([\w\/\-\+]+)/,defaultMime)),window.open(url)||confirm('Displaying New Document\n\nUse Save As... to download, then click back to return to this page.')&&(location.href=url),!0;var f=document.createElement('iframe');document.body.appendChild(f),!winMode&&/^data:/.test(url)&&(url='data:'+url.replace(/^data:([\w\/\-\+]+)/,defaultMime)),f.src=url,setTimeout(function(){document.body.removeChild(f)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(blob,fileName);if(self.URL)saver(self.URL.createObjectURL(blob),!0);else{if(typeof blob=='string'||blob.constructor===toString)try{return saver('data:'+mimeType+';base64,'+self.btoa(blob))}catch(y){return saver('data:'+mimeType+','+encodeURIComponent(blob))}reader=new FileReader,reader.onload=function(e){saver(this.result)},reader.readAsDataURL(blob)}return!0}});


var simplemde = new SimpleMDE({ element: document.getElementById('Inhalt'), spellChecker: false, });
var inhalt;
var titel;
var filename;
var content;
var dateiname;
var websiteTitel;
var datum;
var blogLink;
var inhaltPreview;
var link;

function Speichern(){
    inhalt = simplemde.value().replace(/(?:\r\n|\r|\n)/g, '<br>');
    titel = document.getElementById('titel').value;
    dateiname = document.getElementById('dateiname').value;
    filename = dateiname.replace(/[^a-z0-9+]+/gi, '_'); + '.html';
    websiteTitel = document.getElementById('websiteTitel').value;
    datum = document.getElementById('datum').value;

    inhalt = inhalt.replace(/\u00c4/g, '&Auml');
    inhalt = inhalt.replace(/\u00e4/g, '&auml');
    inhalt = inhalt.replace(/\u00d6/g, '&Ouml');
    inhalt = inhalt.replace(/\u00f6/g, '&ouml');
    inhalt = inhalt.replace(/\u00dc/g, '&Uuml');
    inhalt = inhalt.replace(/\u00fc/g, '&uuml');
    inhalt = inhalt.replace(/\u00df/g, '&szlig');
    inhalt = inhalt.replace(/\u0022/g, '&quot');

    titel = titel.replace(/\u00c4/g, '&Auml');
    titel = titel.replace(/\u00e4/g, '&auml');
    titel = titel.replace(/\u00d6/g, '&Ouml');
    titel = titel.replace(/\u00f6/g, '&ouml');
    titel = titel.replace(/\u00dc/g, '&Uuml');
    titel = titel.replace(/\u00fc/g, '&uuml');
    titel = titel.replace(/\u00df/g, '&szlig');
    titel = titel.replace(/\u0022/g, '&quot');

    websiteTitel = websiteTitel.replace(/\u00c4/g, '&Auml');
    websiteTitel = websiteTitel.replace(/\u00e4/g, '&auml');
    websiteTitel = websiteTitel.replace(/\u00d6/g, '&Ouml');
    websiteTitel = websiteTitel.replace(/\u00f6/g, '&ouml');
    websiteTitel = websiteTitel.replace(/\u00dc/g, '&Uuml');
    websiteTitel = websiteTitel.replace(/\u00fc/g, '&uuml');
    websiteTitel = websiteTitel.replace(/\u00df/g, '&szlig');
    websiteTitel = websiteTitel.replace(/\u0022/g, '&quot');

    datum = datum.replace('T', ' ');

    content = '<!DOCTYPE html> \n\
            <html>\n\
            <html lang=de>\n\
            <head>\n\
                <title>Christian G. - ' + websiteTitel + '</title>\n\
                <script src="index.js"></script>\n\
                <meta charset="utf-8"/>\n\
                <time datetime="' + datum + '" pubdate="pubdate"></time>\n\
            </head>\n\
            <body>\n\
                <div class="topnav blogEintragNav">\n\
                    <a href="javascript:history.back()">Zur&uumlck</a>\n\
                    <a class="active">' + titel + '</a>\n\
                </div>\n\
                <div class="spacer">\n\
                    &nbsp;<br>&nbsp;\n\
                </div>\n\
                <p id="blogEintrag"><br>\n\
                    ' + inhalt + '\n\
                </p>\n\
            </body>\n\
            </html>';

    download(content, filename, "text/html");
    
    inhaltPreview = inhalt.slice(0, 160) + "..."
    link = '/' + filename + '.html';

    blogLink = '<a href='+ link +' style="text-decoration: none;"><div class="blogLink" style="hyphens: auto">\n\
        <h2>' + titel + '</h2>\n\
        <div class="datum">' + datum + '</div>\n\
        <p id="inhaltPreview">' + inhaltPreview +'</p>\n\
        </div></a>'
    
    download(blogLink, filename, "text");
}
