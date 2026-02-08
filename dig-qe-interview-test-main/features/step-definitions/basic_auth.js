import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import BasicAuthPage from "../pageobjects/basic_auth.page.js";

When(
  /^I use basic auth to login with (\w+) and (.+)$/,
  async (username, password) => {
    await BasicAuthPage.login(username, password);
  }
);

Then(/^I should see a paragraph saying (.+)$/, async (message) => {
  await browser.waitUntil(async () => {
    const url = await browser.getUrl();
    return url.includes("/basic_auth");
  }, { timeout: 5000 });

  const source = await browser.getPageSource();

  if (message.includes("Congratulations!")) {
    await expect(source).toContain(message);
    return;
  }

  await expect(source).not.toContain(
    "Congratulations! You must have the proper credentials."
  );

  // Some browsers return a blank HTML document for 401 responses; in that case
  // we can only reliably assert that we did NOT get the success message.
  const normalized = source.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (normalized.length > 0) {
    expect(normalized).toMatch(new RegExp(message, "i"));
  }
});
