console.log("Notification script running...");
import { Content } from "monobrowser";
const content = new Content(document, browser);

const inject = async () => {
  content.inject("<h1>Script injection is working</h1>");
};

inject();
