export const MANDATORY_FIELD_RULE = ['string.empty', 'any.required'];

export const EMAIL_REGEX =
  /^[\d\w]+[-._+]{0,1}([\d\w]+|[-._+]{0,1})?[\d\w+]+([^\W-._+]+)@([\w\d]+)((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

export const PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

export const TOKEN_EXPIRE_TIME = '24h';
