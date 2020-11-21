console.log("Background script running...");
import { Router, Content } from "monobrowser";
const router = new Router(browser, "/background");
const content = new Content(document, browser);

router.logInit();

router.receive("/inject", () => {
  content.executeScript("/js/notification-script.js");
});

router.receive("/dashboard", () => {
  const url = browser.extension.getURL("index.html");
  browser.tabs.create({ url });
});
