const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

// First we're going to navigate to Google.com
beforeAll(async () => {
  await driver.get(
    "file:///Users/mymac/Desktop/DevMTExercises/automation/movieList/index.html"
  );
});

// And after our test has completed, we want to close our browser
afterAll(async () => {
  await driver.quit();
});

test("add movie", async () => {
  let searchBox = await driver.findElement(
    By.xpath("/html/body/main/section/form/input")
  );

  await searchBox.sendKeys("Paid in Fill\n");

  await driver.sleep(2000);
});

test("cross off movie", async () => {
  let movieTitle = await driver.findElement(
    By.xpath("/html/body/main/ul/li/span")
  );

  await movieTitle.click();
  const crossOff = await movieTitle.getCssValue("text-decoration");
  expect(crossOff).toContain("line-through");

  await driver.sleep(2000);
});

test("delete movie", async () => {
  let deleteButton = await driver.findElement(
    By.xpath("/html/body/main/ul/li/button")
  );

  await deleteButton.click();

  await driver.sleep(2000);
});
