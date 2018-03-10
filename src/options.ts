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

  // document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click', () => {
    document.getElementsByName("social")[0].textContent = "hello"
  });

  