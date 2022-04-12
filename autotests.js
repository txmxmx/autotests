// Read README

pm.test("Response time is less than 200ms", function () {
	pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Successful POST request", function () {
	pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});
var jsonObject = xml2Json(responseBody);
pm.environment.get("variable_key");
pm.globals.set("variable_key", "variable_value");
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
	console.log(response.json());
});