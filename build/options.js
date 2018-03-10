"use strict";
// Saves options to chrome.storage
// function save_options(): void {
//     var color = (<HTMLInputElement>document.getElementById('color')).value;
//     var likesColor = (<HTMLInputElement>document.getElementById('like')).checked;
//     chrome.storage.sync.set({
//       favoriteColor: color,
//       likesColor: likesColor
//     }, function() {
//       // Update status to let user know options were saved.
//       var status = document.getElementById('status');
//       status.textContent = 'Options saved.';
//       setTimeout(function() {
//         status.textContent = '';
//       }, 750);
//     });
//   }
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
            console.log(items[item]);
            document.getElementById(item).value = items[item];
        }
    });
}
//   // Restores select box and checkbox state using the preferences
//   // stored in chrome.storage.
//   function restore_options() : void {
//     // Use default value color = 'red' and likesColor = true.
//     chrome.storage.sync.get({
//       favoriteColor: 'red',
//       likesColor: true
//     }, function(items) {
//         (<HTMLInputElement>document.getElementById('color')).value = items.favoriteColor;
//     });
//   }
// document.getElementById('save').addEventListener('click', () => {
//   document.getElementsByName("social")[0].textContent = "hello"
//   let text1 = (<HTMLInputElement>document.getElementById('sports')).value;     
//document.getElementById('myTextArea').value = 'new value';
//   alert(text1);
// });
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
//# sourceMappingURL=options.js.map