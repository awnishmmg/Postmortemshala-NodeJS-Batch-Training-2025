const $Validator = {
  properties: {},
  errors: {},
  createSchema: function ($jsonSchema) {
    $Validator.properties = $jsonSchema;
  },
  validate: function (obj) {
    for (let key in $Validator.properties) {
      if (Object.keys(obj).includes(key)) {
        if (typeof obj[key] === $Validator.properties[key]) {
        } else {
          $Validator.errors[key] = "Type mismatch";
        }
      } else {
        $Validator.errors[key] = "This key is mendatory";
      }
    }
  },
  getErrors: function () {
    return $Validator.errors;
  },
  hasError: function () {
    if (
      Object.keys($Validator.errors).length ==
        Object.values($Validator.errors).length &&
      Object.keys($Validator.errors).length == 0
    ) {
      return false;
    }
    return true;
  },
};

module.exports = $Validator;
