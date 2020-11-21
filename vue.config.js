module.exports = {
  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/popup/main.js",
      title: "Popup"
    },
    index: {
      template: "public/index.html",
      entry: "./src/main.js",
      title: "Dashboard"
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: "src/background.js"
        },
        contentScripts: {
          entries: {
            "content-script": ["src/content-scripts/content-script.js"],
            "notification-script": ["src/content-scripts/notification.js"]
          }
        }
      }
    }
  }
};
