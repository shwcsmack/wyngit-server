/* eslint-disable */
export function Allow(validationOptions?: any): any;
export function ArrayContains(values: any, validationOptions?: any): any;
export function ArrayMaxSize(max: any, validationOptions?: any): any;
export function ArrayMinSize(min: any, validationOptions?: any): any;
export function ArrayNotContains(values: any, validationOptions?: any): any;
export function ArrayNotEmpty(validationOptions?: any): any;
export function ArrayUnique(validationOptions?: any): any;
export function Contains(seed: any, validationOptions?: any): any;
export function Equals(comparison: any, validationOptions?: any): any;
export function IsAlpha(validationOptions?: any): any;
export function IsAlphanumeric(validationOptions?: any): any;
export function IsArray(validationOptions?: any): any;
export function IsAscii(validationOptions?: any): any;
export function IsBase64(validationOptions?: any): any;
export function IsBoolean(validationOptions?: any): any;
export function IsBooleanString(validationOptions?: any): any;
export function IsByteLength(min: any, max: any, validationOptions?: any): any;
export function IsCreditCard(validationOptions?: any): any;
export function IsCurrency(Options?: any, validationOptions?: any): any;
export function IsDate(validationOptions?: any): any;
export function IsDateString(validationOptions?: any): any;
export function IsDefined(validationOptions?: any): any;
export function IsDivisibleBy(num: any, validationOptions?: any): any;
export function IsEmail(Options?: any, validationOptions?: any): any;
export function IsEmpty(validationOptions?: any): any;
export function IsEnum(entity: any, validationOptions?: any): any;
export function IsFQDN(Options?: any, validationOptions?: any): any;
export function IsFullWidth(validationOptions?: any): any;
export function IsHalfWidth(validationOptions?: any): any;
export function IsHexColor(validationOptions?: any): any;
export function IsHexadecimal(validationOptions?: any): any;
export function IsIP(version: any, validationOptions?: any): any;
export function IsISBN(version: any, validationOptions?: any): any;
export function IsISIN(validationOptions?: any): any;
export function IsISO8601(validationOptions?: any): any;
export function IsIn(values: any, validationOptions?: any): any;
export function IsInstance(targetType: any, validationOptions?: any): any;
export function IsInt(validationOptions?: any): any;
export function IsJSON(validationOptions?: any): any;
export function IsLowercase(validationOptions?: any): any;
export function IsMilitaryTime(validationOptions?: any): any;
export function IsMobilePhone(locale: any, validationOptions?: any): any;
export function IsMongoId(validationOptions?: any): any;
export function IsMultibyte(validationOptions?: any): any;
export function IsNegative(validationOptions?: any): any;
export function IsNotEmpty(validationOptions?: any): any;
export function IsNotIn(values: any, validationOptions?: any): any;
export function IsNumber(Options?: any, validationOptions?: any): any;
export function IsNumberString(validationOptions?: any): any;
export function IsOptional(validationOptions?: any): any;
export function IsPhoneNumber(region: any, validationOptions?: any): any;
export function IsPositive(validationOptions?: any): any;
export function IsString(validationOptions?: any): any;
export function IsSurrogatePair(validationOptions?: any): any;
export function IsUUID(version: any, validationOptions?: any): any;
export function IsUppercase(validationOptions?: any): any;
export function IsUrl(Options?: any, validationOptions?: any): any;
export function IsVariableWidth(validationOptions?: any): any;
export function Length(min: any, max: any, validationOptions?: any): any;
export function Matches(pattern: any, modifiersOrAnnotationOptions?: any, validationOptions?: any): any;
export function Max(max: any, validationOptions?: any): any;
export function MaxDate(date: any, validationOptions?: any): any;
export function MaxLength(max: any, validationOptions?: any): any;
export class MetadataStorage {
  validationMetadatas: any;
  constraintMetadatas: any;
  addConstraintMetadata(metadata: any): void;
  addValidationMetadata(metadata: any): void;
  addValidationSchema(schema: any): void;
  getTargetValidationMetadatas(targetConstructor: any, targetSchema: any, groups: any): any;
  getTargetValidatorConstraints(target: any): any;
  groupByPropertyName(metadata: any): any;
}
export function Min(min: any, validationOptions?: any): any;
export function MinDate(date: any, validationOptions?: any): any;
export function MinLength(min: any, validationOptions?: any): any;
export function NotContains(seed: any, validationOptions?: any): any;
export function NotEquals(comparison: any, validationOptions?: any): any;
export function Validate(constraintClass: any, constraintsOrValidationOptions?: any, maybeValidationOptions?: any): any;
export function ValidateIf(condition: any, validationOptions?: any): any;
export function ValidateNested(validationOptions?: any): any;
export class ValidationError {
  target: Record<string, any>; // Object that was validated.
  property: string; // Object's property that haven't pass validation.
  value: any; // Value that haven't pass a validation.
  constraints?: {
    // Constraints that failed validation with error messages.
    [type: string]: string;
  };
  children?: ValidationError[]; // Contains all nested validation errors of the property
}
export function ValidationTypes(): void;
export namespace ValidationTypes {
  const ARRAY_CONTAINS: string;
  const ARRAY_MAX_SIZE: string;
  const ARRAY_MIN_SIZE: string;
  const ARRAY_NOT_CONTAINS: string;
  const ARRAY_NOT_EMPTY: string;
  const ARRAY_UNIQUE: string;
  const CONDITIONAL_VALIDATION: string;
  const CONTAINS: string;
  const CUSTOM_VALIDATION: string;
  const EQUALS: string;
  const IS_ALPHA: string;
  const IS_ALPHANUMERIC: string;
  const IS_ARRAY: string;
  const IS_ASCII: string;
  const IS_BASE64: string;
  const IS_BOOLEAN: string;
  const IS_BOOLEAN_STRING: string;
  const IS_BYTE_LENGTH: string;
  const IS_CREDIT_CARD: string;
  const IS_CURRENCY: string;
  const IS_DATE: string;
  const IS_DATE_STRING: string;
  const IS_DEFINED: string;
  const IS_DIVISIBLE_BY: string;
  const IS_EMAIL: string;
  const IS_EMPTY: string;
  const IS_ENUM: string;
  const IS_FQDN: string;
  const IS_FULL_WIDTH: string;
  const IS_HALF_WIDTH: string;
  const IS_HEXADECIMAL: string;
  const IS_HEX_COLOR: string;
  const IS_IN: string;
  const IS_INSTANCE: string;
  const IS_INT: string;
  const IS_IP: string;
  const IS_ISBN: string;
  const IS_ISIN: string;
  const IS_ISO8601: string;
  const IS_JSON: string;
  const IS_LOWERCASE: string;
  const IS_MILITARY_TIME: string;
  const IS_MOBILE_PHONE: string;
  const IS_MONGO_ID: string;
  const IS_MULTIBYTE: string;
  const IS_NEGATIVE: string;
  const IS_NOT_EMPTY: string;
  const IS_NOT_IN: string;
  const IS_NUMBER: string;
  const IS_NUMBER_STRING: string;
  const IS_PHONE_NUMBER: string;
  const IS_POSITIVE: string;
  const IS_STRING: string;
  const IS_SURROGATE_PAIR: string;
  const IS_UPPERCASE: string;
  const IS_URL: string;
  const IS_UUID: string;
  const IS_VARIABLE_WIDTH: string;
  const LENGTH: string;
  const MATCHES: string;
  const MAX: string;
  const MAX_DATE: string;
  const MAX_LENGTH: string;
  const MIN: string;
  const MIN_DATE: string;
  const MIN_LENGTH: string;
  const NESTED_VALIDATION: string;
  const NOT_CONTAINS: string;
  const NOT_EQUALS: string;
  const WHITELIST: string;
  function getMessage(type: any, isEach: any): any;
  function isValid(type: any): any;
}
export class Validator {
  validatorJs: any;
  libPhoneNumber: any;
  arrayContains(array: any, values: any): any;
  arrayMaxSize(array: any, max: any): any;
  arrayMinSize(array: any, min: any): any;
  arrayNotContains(array: any, values: any): any;
  arrayNotEmpty(array: any): any;
  arrayUnique(array: any): any;
  contains(value: any, seed: any): any;
  coreValidate(objectOrSchemaName: any, objectOrValidationOptions?: any, maybeValidatorOptions?: any): any;
  equals(value: any, comparison: any): any;
  isAlpha(value: any): any;
  isAlphanumeric(value: any): any;
  isArray(value: any): any;
  isAscii(value: any): any;
  isBase64(value: any): any;
  isBoolean(value: any): any;
  isBooleanString(value: any): any;
  isByteLength(value: any, min: any, max: any): any;
  isCreditCard(value: any): any;
  isCurrency(value: any, Options?: any): any;
  isDate(value: any): any;
  isDateString(value: any): any;
  isDefined(value: any): any;
  isDivisibleBy(value: any, num: any): any;
  isEmail(value: any, Options?: any): any;
  isEmpty(value: any): any;
  isEnum(value: any, entity: any): any;
  isFQDN(value: any, Options?: any): any;
  isFullWidth(value: any): any;
  isHalfWidth(value: any): any;
  isHexColor(value: any): any;
  isHexadecimal(value: any): any;
  isIP(value: any, version: any): any;
  isISBN(value: any, version: any): any;
  isISIN(value: any): any;
  isISO8601(value: any): any;
  isIn(value: any, possibleValues: any): any;
  isInstance(object: any, targetTypeConstructor: any): any;
  isInt(val: any): any;
  isJSON(value: any): any;
  isLowercase(value: any): any;
  isMilitaryTime(value: any): any;
  isMobilePhone(value: any, locale: any): any;
  isMongoId(value: any): any;
  isMultibyte(value: any): any;
  isNegative(value: any): any;
  isNotEmpty(value: any): any;
  isNotIn(value: any, possibleValues: any): any;
  isNumber(value: any, Options?: any): any;
  isNumberString(value: any): any;
  isPhoneNumber(value: any, region: any): any;
  isPositive(value: any): any;
  isString(value: any): any;
  isSurrogatePair(value: any): any;
  isURL(value: any, Options?: any): any;
  isUUID(value: any, version: any): any;
  isUppercase(value: any): any;
  isVariableWidth(value: any): any;
  length(value: any, min: any, max: any): any;
  matches(value: any, pattern: any, modifiers: any): any;
  max(num: any, max: any): any;
  maxDate(date: any, maxDate: any): any;
  maxLength(value: any, max: any): any;
  min(num: any, min: any): any;
  minDate(date: any, minDate: any): any;
  minLength(value: any, min: any): any;
  notContains(value: any, seed: any): any;
  notEquals(value: any, comparison: any): any;
  validate(objectOrSchemaName: any, objectOrValidationOptions?: any, maybeValidatorOptions?: any): any;
  validateOrReject(objectOrSchemaName: any, objectOrValidationOptions?: any, maybeValidatorOptions?: any): any;
  validateSync(objectOrSchemaName: any, objectOrValidationOptions?: any, maybeValidatorOptions?: any): any;
  validateValueByMetadata(value: any, metadata: any): any;
}
export function ValidatorConstraint(Options?: any): any;
export function getFromContainer(someClass: any): any;
export function registerDecorator(Options?: any): void;
export function registerSchema(schema: any): void;
export function useContainer(iocContainer: any, Options?: any): void;
export function validate(schemaNameOrObject: any, objectOrValidationOptions?: ValidatorOptions): any;
export function validateOrReject(
  schemaNameOrObject: any,
  objectOrValidationOptions?: any,
  maybeValidatorOptions?: any,
): any;
export function validateSync(
  schemaNameOrObject: any,
  objectOrValidationOptions?: any,
  maybeValidatorOptions?: any,
): any;
export interface ValidatorOptions {
  skipMissingProperties?: boolean;
  whitelist?: boolean;
  forbidNonWhitelisted?: boolean;
  groups?: string[];
  dismissDefaultMessages?: boolean;
  validationError?: {
    target?: boolean;
    value?: boolean;
  };

  forbidUnknownValues?: boolean;
}
