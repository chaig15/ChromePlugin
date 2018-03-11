"use strict";
function save_options() {
    $(document).ready(function () {
        $('textarea').each(function () {
            var storageID = this.id;
            chrome.storage.local.set((_a = {},
                _a[storageID] = this.value,
                _a), function () {
                var status = document.getElementById('status');
                status.textContent = 'Options saved.';
                setTimeout(function () {
                    status.textContent = '';
                }, 1000);
            });
            var _a;
        });
    });
}
function restore_options() {
    chrome.storage.local.get(null, function (items) {
        for (var item in items) {
            document.getElementById(item).value = items[item];
        }
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
//# sourceMappingURL=options.js.map