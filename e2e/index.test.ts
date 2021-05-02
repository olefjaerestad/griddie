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
  it('DOM should contain grid (.g), cell (.c) and offset (.o) classes', async () => {
    await page.goto(WEBSERVER_URL);
    const hasGridNode = await page.isVisible('.g');
    const hasCellNode = await page.isVisible('.c');
    const hasOffsetNode = await page.isVisible('[class*="o-"]');
    expect(hasGridNode).toBe(true); // Note: Runtime errors on the page might cause this to fail.
    expect(hasCellNode).toBe(true);
    expect(hasOffsetNode).toBe(true);
    await page.screenshot({path: `${SCREENSHOTS_PATH}/example.png`});
  });
});
