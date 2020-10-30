document.addEventListener("DOMContentLoaded", () => {

    let button = document.getElementById("findConns")
    button.addEventListener("click", () => {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
            let tab = tabs[0]
            let url = new URL(tab.url)
            let domain = url.hostname
            const site = domain.substring(0, domain.length - 4)
            console.log(`the current site:  ${site}`)

            chrome.runtime.sendMessage(
                {
                    site: `${site}`
                },
                (responseText) => {
                    console.log(responseText)
                }
            )


        })
    }, false)


    //Currently trying to figure out...
    // let headButton = document.getElementById("extractHead")
    // headButton.addEventListener("click", () => {
    //     chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    //         let head = document.head.innerHTML
    //         console.log(head)
    //     })
    // })


}, false)



