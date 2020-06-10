const axios = require("axios");

const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });

class Rest {
  constructor() {
    this.config = {
      baseURL: "http://localhost:3030/products",
    };
  }

  async get(path) {
    return await axios.get(path, this.config);
  }

  /**
   *
   * @param {object} schema
   * @param {object} data
   * This function verifiesif the data matches required schema.
   * It is used here to verify that object received from server has all required properties
   * and all properties are of expected type.
   *
   *In case validation fails, this function will retuen an array of errors or null if validation passed successfully
   */
  validateSchema(schema, data) {
    ajv.validate(schema, data);
    return ajv.errors;
  }
}

module.exports = new Rest();
