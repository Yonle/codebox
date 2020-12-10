const codebox = document.getElementById('codebox');
// Load CodeBox element

// Listen to Input event
document.getElementById('input').addEventListener('input', () => {
  // Write to Preview screen
  document.getElementById('box').innerHTML = document.getElementById('input').value
  // Save to Cookie so User can Wriye it anytime
  createCookie('lastsession', document.getElementById('input').value)
})

// If there's a Cookie
if (getCookie('lastsession').length > 0) {
// Restore it
  document.getElementById('input').value = getCookie('lastsession');;
  document.getElementById('box').innerHTML = getCookie('lastsession');;
}

// Hide CodeBox Window
function hide_cdbox () {
codebox.style.display = 'none';
document.getElementById('cdbox_showbutton').style.display = 'block';
}

// Show CodeBox Window
function show_cdbox () {
codebox.style.display = 'block';
document.getElementById('cdbox_showbutton').style.display = 'none';
}


// Cookie Handler

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
