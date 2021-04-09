const expect = require("chai").expect;
import app from "./src/routes/whatToDo";
const request = require("supertest")(app);
import nock from "nock";

describe("What to do endpoint", function () {
  before(() => { 
    nock('https://www.boredapi.com')
    .get("/api/activity")
    .reply(200,{"activity":"drink a single beer","type":"bbb","participants":1,"price":0,"link":"","key":"0","accessibility":"0.2"});
  })

  it("Should eventually provide 'drink a single beer'", async function () {
    const response = await request.get("/whattodo")
    expect(response.body.activity).to.be.equal("drink a single beer");
  })
})


