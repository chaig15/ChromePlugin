const urlPattern: RegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i

function OpenTab(dropdown: HTMLElement | null) {
    let id: string = (<HTMLInputElement>dropdown).value.toLowerCase();
    chrome.storage.local.get({
        [id]: null
    }, function(items) {
        let urls: string[] = parseURL(items[id]);
        for (let urlToOpen of urls) {
            if (urlPattern.test(urlToOpen)) {
                chrome.tabs.create({
                    url: urlToOpen
                })
            }
        } 
    });
}

function parseURL(urls: string): string[] {
    return urls.split(/[ ,]+/);
}

document.addEventListener('DOMContentLoaded', () => {
    var dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('change', () => {
        OpenTab(dropdown);  
    });
    document.getElementById('options').addEventListener('click', () => {
        chrome.tabs.create({
            url: "chrome-extension://"+chrome.runtime.id+"/options.html"
        })
    });
});