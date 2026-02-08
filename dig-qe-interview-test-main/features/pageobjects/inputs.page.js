import { browser } from "@wdio/globals";

class DropdownPage {
  get elements() {
    return {
      header: () => $("h3"),
      input: () => $("/html/body/div[2]/div/div/div/div/input"),
    };
  }

  async set(value) {
    const input = await this.elements.input();
    await input.waitForExist({ timeout: 5000 });
    await input.waitForDisplayed({ timeout: 5000 });
    await input.scrollIntoView();
    await input.clearValue();
    await input.setValue(value);
    await browser.waitUntil(async () => (await input.getValue()) === String(value), {
      timeout: 5000,
    });
  }
}

export default new DropdownPage();
