import { chromium } from 'playwright'; 
import dotenv from "dotenv"

const BASE_URL = 'https://www.linkedin.com/jobs/';

(async () => {
  await import("dotenv/config")
  console.log(process.env)
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(BASE_URL);
  await page.pause()
  console.log("working");
  await browser.close();
})();