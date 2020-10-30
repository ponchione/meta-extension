chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {

        console.log(
            sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension"
        )

        sendSite()
        sendResponse()
    }
)


function sendSite() {
    let siteName = document
        .querySelector("meta[property='og:site_name']")
        .getAttribute('content')

    console.log("Sending site name message to background...")
    chrome.runtime.sendMessage({site: `${siteName}`}, (response) => {
        console.log(response)
    })

}



