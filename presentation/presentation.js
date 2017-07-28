var head = document.getElementsByTagName('head')[0];
var css = document.createElement('link');
css.setAttribute('rel', 'stylesheet')
css.setAttribute('type', 'text/css')
css.setAttribute('href', 'presentation/styles.css')
head.appendChild(css);

document.querySelector("a[href='#twitter-ict']").addEventListener('click', function(evt){
    console.log('hi')
});


iframes = document.getElementsByTagName('iframe')
for (var i =0; i<iframes.length; i++) {
    iframes[i].parentElement.className = 'full';
}
/*
var landscape_script = document.createElement('script');
landscape_script.setAttribute('src', 'cantons/dist/main.js')
head.appendChild(landscape_script)


ajax('cantons/dist/index.html', function(resp){
    var landscape = document.getElementById('landscape');
    landscape.innerHTML = resp;
});


function ajax(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        callback(request.responseText);
      } else {
          callback("")
      }
    };

    request.onerror = function() {
        callback("");
    };

    request.send();

}

*/
