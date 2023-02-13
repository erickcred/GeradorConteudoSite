const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1024,
      height: 700
    })
  
    win.loadFile('src/view/index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })