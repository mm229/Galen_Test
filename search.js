/**
 * Created by mmyang on 4/14/17.
 */
driver.findElement(By.cssSelector("#where")).sendKeys("46 St Kilda Rd, St Kilda, VIC 3182");

// Submitting the login page
driver.findElement(By.cssSelector(".rui-search-button")).click();

// Waiting till search page loaded
function pageIsLoaded() {
    return driver.findElement(By.id("searchResults")) != null;
}

waitFor(pageIsLoaded);


function waitFor(func) {
    var timeout = 3;

    while(timeout > 0 && !func()) {
        timeout = timeout - 1;
        Thread.sleep(1000);
    }

    if (!func()) {
        throw new Error("Wait timeout");
    }
}