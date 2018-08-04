export const ValidationType = {
  Required: 0,
  Number: 1,
  String: 2,
  MinLength: 3,
  MaxLength: 4,
  MinValue: 5,
  MaxValue: 6,
  Range: 7,
  Email: 8,
  Match: 9,
};

class Validation {
  constructor(validationType, args) {
    this.type = validationType;
    this.args = args;
  }

  isValid = (value) => {
    switch (this.type) {
      case ValidationType.Required:
        return this.isRequiredValid(value);

      case ValidationType.Email:
        return this.isEmailValid(value);

      case ValidationType.Match:
        return this.isMatchValid(value);

      default:
        return false;
    }
  }

  isRequiredValid = value => (
    value &&
    (
      typeof (value) === 'string' &&
      value.length > 0
    )
  )

  isEmailValid = (value) => {
    const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(value);
  }

  isMatchValid = value => (
    typeof (value) === 'string' &&
    typeof (this.args[0]) === 'string' &&
    value === this.args[0]
  )
}

export default Validation;
