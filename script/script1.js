function createWindow() {
    let url = "https://google.com";
    let win = window.open(url, "My New Window", "Width=300", "Height=200");
    document.getElementById("result").innderHTML = 
        win.name + " - " + win.opener.location;
}