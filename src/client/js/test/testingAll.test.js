const { formChange } = require("../formChange")
const { formSubmit } = require("../formSubmit")
const { postReq } = require("../postReq")

test('testing', () => {
  expect(formChange).toBeDefined();
  expect(formSubmit).toBeDefined();
  expect(postReq).toBeDefined();
})

