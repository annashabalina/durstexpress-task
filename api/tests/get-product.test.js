const rest = require("../lib/Rest");
const chai = require("chai");
const expect = chai.expect;
const productSchema = require("../lib/product-schema");

describe("As a system, I want to retrieve a product by using product ID", async function () {
  const duracellBateryProductId = "43900";
    before(async function setUp() {
        /**
         * If i had access to API, here i would create my own product
         * and test would access the created product by id. 
         * After hook would delete the created product to clean up after test run.
         * Another way would be to send a GET request to /products and get the id of the 1st product.
         * Both cases allow us to avoid the 404 situation, when product with given id is no longer available.
         * For the sake of simplicity, i will harcode the id of the product i want to GET.
         */
  });

  it("Get product by id", async function () {
    const { status, data } = await rest.get(`/${duracellBateryProductId}`);
    expect(status).to.eql(200);
    expect(rest.validateSchema(productSchema, data)).to.be.null;
  });
});
