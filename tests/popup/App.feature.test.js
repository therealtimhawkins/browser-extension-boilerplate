const puppeteer = require("puppeteer"); // import Puppeteer

// Path to the actual extension we want to be testing
const pathToExtension = "dist";

// Tell puppeteer we want to load the web extension
const puppeteerArgs = [
  `--disable-extensions-except=${pathToExtension}`,
  `--load-extension=${pathToExtension}`,
  "--show-component-extension-options"
];

describe("Popup page", () => {
  let page, browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      devtools: true,
      args: puppeteerArgs
    });
    // const url = browser.extension.getURL("popup.html");
    // console.log(url);
    page = await browser.newPage();
    await page.goto("https://google.com");
  });

  afterAll(async () => {
    await browser.close();
  });

  it("tests something, will come back to this shortly", async () => {});
});
