import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import checkboxesPage from "../pageobjects/checkboxes.page.js";

When(/^I select checkbox (\d)$/, async function (num) {
  this.checkboxNum = num;
  await checkboxesPage.select(num);
});

Then(/^The checkbox should be checked$/, async function () {
  const checkbox = await checkboxesPage.elements.checkbox(this.checkboxNum);
  await checkbox.waitForExist({ timeout: 5000 });
  await expect(checkbox).toBeSelected();
});
