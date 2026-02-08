class CheckboxesPage {
  get elements() {
    return {
      header: () => $("h3"),
      checkbox: async (num) => {
        const checkboxes = await $$("#checkboxes input[type=\"checkbox\"]");
        return checkboxes[Number(num) - 1];
      },
    };
  }

  async select(num) {
    const checkbox = await this.elements.checkbox(num);
    await checkbox.waitForExist({ timeout: 5000 });
    await checkbox.waitForDisplayed({ timeout: 5000 });
    await checkbox.scrollIntoView();
    await checkbox.waitForClickable({ timeout: 5000 });

    if (!(await checkbox.isSelected())) {
      await checkbox.click();
      await browser.waitUntil(async () => checkbox.isSelected(), {
        timeout: 5000,
      });
    }
  }
}

export default new CheckboxesPage();
