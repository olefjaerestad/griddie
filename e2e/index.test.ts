import { chromium, ChromiumBrowser, Page } from 'playwright';
import { createServer } from '../server.js';

const WEBSERVER_DOMAIN = 'http://localhost';
const WEBSERVER_PORT = 3000;
const WEBSERVER_URL = `${WEBSERVER_DOMAIN}:${WEBSERVER_PORT}`;
const SCREENSHOTS_PATH = `e2e/screenshots`;

let server: ReturnType<typeof createServer>;
let browser: ChromiumBrowser;
let page: Page;

beforeAll(async () => {
  server = createServer();
  browser = await chromium.launch({
    headless: false,
    slowMo: 100,
  });
});
afterAll(async () => {
  await browser.close();
  await server.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

describe('Basic layout', () => {
  it('DOM should contain an element with id="app"', async () => {
    await page.goto(WEBSERVER_URL);
    const hasAppNode = await page.isVisible('#app');
    expect(hasAppNode).toBe(true); // Note: Runtime errors on the page might cause this to fail.
    await page.screenshot({path: `${SCREENSHOTS_PATH}/example.png`});
  });
});
