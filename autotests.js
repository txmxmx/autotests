// Read README
var schema = {
    "items": {
        "type": "boolean"
    }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
    pm.expect(tv4.validate(data1, schema)).to.be.true;
    pm.expect(tv4.validate(data2, schema)).to.be.true;
});

var jsonObject = xml2Json(responseBody);

pm.test("Status code name has string", function() {
    pm.response.to.have.status("Created");
});

pm.test("Successful POST request", function() {
    pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});

pm.test("Response time is less than 200ms", function() {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Content-Type is present", function() {
    pm.response.to.have.header("Content_Type");
});

pm.test("Body is correct", function() {
    pm.response.to.have.body("response_body_string");
});

pm.test("Your test name", function() {
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql(100);
});

pm.test("Body matches string", function() {
    pm.expect(pm.response.text()).to.include("string_you_want_to_search");
});

pm.test("Status code is 200", function() {
    pm.response.to.have.status(200);
});

pm.sendRequest("https://postman-echo.com/get", function(err, response) {
    console.log(response.json());
});

const capitalize = (text) => {
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstChar}${restSubstring}`;
};