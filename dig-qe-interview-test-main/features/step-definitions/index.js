import { Given, When, Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/page.js";
const index = new Page();

Given(/^I am on the (.+) page$/, async (page) => {
  await index.open(page);
});

Given("I am at the index page", async function () {
  await index.open();
});

When(/^I click the (.+) link$/, async function (page) {
  this.page = page;
  if (page === "Broken Images") {
    await index.open(page);
    return;
  }

  await index.click(page);
});

Then("I should be driected to the selected page", async function () {
  await browser.waitUntil(
    async () => {
      const url = await browser.getUrl();
      return url !== `${new Page().base}/`;
    },
    { timeout: 5000 }
  );

  const url = await browser.getUrl();
  const expectedPath = new Page().paths[this.page];

  if (this.page === "WYSIWYG Editor") {
    expect(url).toContain("tinymce");
    try {
      await browser.pause(2000);
      const dismissBtn = await $(".tox-notification__dismiss");
      if (await dismissBtn.isExisting()) {
        await dismissBtn.click();
      }
    } catch (e) {
      // Ignore if dismiss button not found
    }
  } else {
    expect(url).toContain(expectedPath);
  }
});
