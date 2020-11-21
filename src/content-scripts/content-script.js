console.log("Content-script is running...");
import { Router, Scraper } from "monobrowser";
const router = new Router(browser, "/content");
const scraper = new Scraper(document);

router.receive("/scrape", body => {
  const listData = scraper.getListData(body.list, body.elements);
  return listData;
});
