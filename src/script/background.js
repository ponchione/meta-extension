chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {

        var xhr = new XMLHttpRequest()

        xhr.onload = () => {
            callback(xhr.responseText)
        }
        
        xhr.onerror = () => {
            //Do something with the error
            //invoke callback() to clean up comm port
            callback()
        }

        xhr.open('POST', 'http://127.0.0.1:5000/site', true)
        xhr.setRequestHeader('Content-Type', 'application/json')

        let thing = JSON.stringify({
            site: request.site
        })
        xhr.send(thing)
        return true
    })