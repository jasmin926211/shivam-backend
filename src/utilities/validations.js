/**
 *
 * @param {array} validations array of validations to be combined for eg. ["any.required","string.empty"]
 * @param {string} errorMessage common message to be set for these validations
 *
 * @returns {object} returns a validation message object
 *
 * eg.
 * combineValidationMessages(["any.required","string.empty"],"name is mandatory");
 *
 * will return
 * {"any.empty":" name is mandatory","any.required":"name is mandatory"}
 */
export const combineValidationMessages = (validations, errorMessage) => {
  const validationMessageRules = {};
  validations.forEach((fieldRule) => {
    validationMessageRules[fieldRule] = errorMessage;
  });

  return validationMessageRules;
};

/**
 *
 * @param {string} key it is the validation key eg. number.base
 * @param {string} dataType it is the data type being validated eg.number
 * @param {string} fieldText it is the name of field being validated eg. age
 *
 * @returns {object} returns an object of validation message
 *
 * eg: {"number.base":"Age should be a valid number"}
 */
export const generateInvalidDataTypeMessage = (key, dataType, fieldText) => ({
  [key]: `${fieldText} should be of type ${dataType}`,
});

/**
 *
 * @param {*} field it field name
 * @param {*} enums enum list
 */
export const generateInvalidEnumMessage = (field, enums) => ({
  'any.only': `${field} should be one of ${enums}`,
});

/**
 *
 * @param {string } message it field name eg. email, name, password
 */
export const generateMandatoryFieldMessage = (message) => `${message} is a mandatory field`;

export const generalMinLengthMessage = (key, minlength, fieldText) => {
  if (key === 'number.min') {
    return { [key]: `${fieldText} should be more than ${minlength}` };
  }

  return {
    [key]: `${fieldText} length should be more than ${minlength} characters`,
  };
};

export const generalMaxLengthMessage = (key, maxlength, fieldText) => {
  if (key === 'number.max') {
    return { [key]: `${fieldText} should be less than ${maxlength}` };
  }

  return {
    [key]: `${fieldText} length should be less than ${maxlength} characters`,
  };
};

export const passwordInvalidPatternMessage = (key, fieldText) => {
  if (key === 'string.pattern') {
    return { [key]: `${fieldText} pattern is Invalid` };
  }

  return { [key]: `${fieldText} pattern is Invalid` };
};
