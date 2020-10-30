document.addEventListener("DOMContentLoaded", () => {

    console.log("From inside the popup.js document event listener")
    document
        .getElementById("button")
        .addEventListener("click", popup, false)

}, false)


function popup() {
    console.log("From inside the popup() function")
    chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {message: "start"}, (response) => {
            console.log("from inside popup() sendMessage response")
            console.log(response)
        })
    })
}






// function getMetaTagContent() {
//     return
// }

// chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
//     let tab = tabs[0]
//     let url = new URL(tab.url)
//     let domain = url.hostname
//     const site = domain.substring(0, domain.length - 4)
//     console.log(`the current site:  ${site}`)
//
//     chrome.runtime.sendMessage(
//         {
//             site: `${site}`
//         },
//         (responseText) => {
//             console.log(responseText)
//         }
//     )
// })
