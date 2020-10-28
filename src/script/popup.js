document.addEventListener("DOMContentLoaded", () => {

    let button = document.getElementById("findConns")
    button.addEventListener("click", (e) => {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
            let tab = tabs[0]
            let url = new URL(tab.url)
            let domain = url.hostname
            const site = domain.substring(0, domain.length - 4)

            console.log(site)


            let wikiSearch = 'https://en.wikipedia.org/w/api.php'
            // https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=&srlimit=20&srsearch=SEARCH_QUERY_GOES_HERE

            const params = {
                action: "query",
                format: "json",
                list: "allpages",
                apfrom: `${site}`
            };

            wikiSearch = wikiSearch + '?origin=*';
            Object.keys(params).forEach((key) => {
                wikiSearch += `&${key}=${params[key]}`
            })

            console.log(wikiSearch)

            fetch(wikiSearch)
                .then((response) => {return response.json()})
                .then((response) => {
                    const pages = response.query.allpages
                    for (let p in pages) {
                        console.log(pages[p].title)
                    }
                }).catch((error) => {
                    console.log("There's been an error my dude")
                    console.log(error)
                })

        })
    }, false)
}, false)



