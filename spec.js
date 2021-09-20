              const jsdom = require("jsdom");
              const fs = require('fs');
              const path = require('path');
              describe('Protractor Demo App', function() {
                    it('Test 1', function() {
                        browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 100000;
                        browser.sleep(3000);
browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(2)), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Soft\\case4\\case4";
                              var fname="page1.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
            stream1.write(new Buffer(png, 'base64'));
            stream1.end();
            });
element.all(by.xpath('//button')).get(2).click();
browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath('//select[@name="userSelect"]//option[@value="3"]'))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Soft\\case4\\case4";
                              var fname="page2.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
            stream1.write(new Buffer(png, 'base64'));
            stream1.end();
            });
element(by.xpath('//select[@name="userSelect"]//option[@value="3"]')).click();
browser.wait(until.presenceOf(element.all(by.xpath('//button')).get(2)), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {
                        var dir="D:\\Soft\\case4\\case4";
                              var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
            stream1.write(new Buffer(png, 'base64'));
            stream1.end();
            });
element.all(by.xpath('//button')).get(2).click();
browser.sleep(3000);});
});