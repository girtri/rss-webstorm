
const { app, BrowserWindow } = require("electron"),
      path = require("path"),
      url = require("url");
let mainWindow;

const {default: installExtension, REACT_DEVELOPER_TOOLS} = require("electron-devtools-installer");

function createWindow() {
    // React Developer Tools
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension: ${name}`))
        .catch((err) => console.log("An error occurred: ", err));

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200, height: 600,
    icon: path.join(__dirname, "icon-64x64.png")
  });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true
  }) );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow );

app.on("window-all-closed", () => {
  if (process.platform !== "darwin" ) {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.commandLine.appendSwitch('remote-debugging-port', '9222');

require("electron-debug" )();
