function save_options(): void {
  $(document).ready(function() {
    $('textarea').each(function() {
      let storageID: string = this.id
      chrome.storage.local.set(
        {
          [storageID]: (<HTMLInputElement>this).value
        }
      , function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
          status.textContent = '';
      }, 1000);
      });
    });
  });
}

function restore_options(): void {
  chrome.storage.local.get(null, function(items) {
      for (let item in items) {
        (<HTMLInputElement>document.getElementById(item)).value = items[item];
      }
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);


  