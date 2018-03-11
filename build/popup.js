"use strict";
var urlPattern = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
function OpenTab(dropdown) {
    var id = dropdown.value.toLowerCase();
    chrome.storage.local.get((_a = {},
        _a[id] = null,
        _a), function (items) {
        var urls = parseURL(items[id]);
        for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
            var urlToOpen = urls_1[_i];
            if (urlPattern.test(urlToOpen)) {
                chrome.tabs.create({
                    url: urlToOpen
                });
            }
        }
    });
    var _a;
}
function parseURL(urls) {
    return urls.split(/[ ,]+/);
}
document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('change', function () {
        OpenTab(dropdown);
    });
});
//# sourceMappingURL=popup.js.map