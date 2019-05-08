/* eslint-disable */
export class ClassTransformer {
  public classToClass(object: any, options?: any): any;
  public classToClassFromExist(object: any, fromObject: any, options?: any): any;
  public classToPlain(object: any, options?: any): any;
  public classToPlainFromExist(object: any, plainObject: any, options?: any): any;
  public deserialize(cls: any, json: any, options?: any): any;
  public deserializeArray(cls: any, json: any, options?: any): any;
  public plainToClass(cls: any, plain: any, options?: any): any;
  public plainToClassFromExist(clsObject: any, plain: any, options?: any): any;
  public serialize(object: any, options?: any): any;
}
export function Exclude(options?: any): any;
export function Expose(options?: any): any;
export function Transform(transformFn: any, options?: any): any;
export function TransformClassToClass(params: any): any;
export function TransformClassToPlain(params: any): any;
export function TransformPlainToClass(classType: any, params: any): any;
export const TransformationType: {
  '0': string;
  '1': string;
  '2': string;
  CLASS_TO_CLASS: number;
  CLASS_TO_PLAIN: number;
  PLAIN_TO_CLASS: number;
};
export function Type(typeFunction: any, options?: any): any;
export function classToClass(object: any, options?: any): any;
export function classToClassFromExist(object: any, fromObject: any, options?: any): any;
export function classToPlain(object: any, options?: any): any;
export function classToPlainFromExist(object: any, plainObject: any, options?: any): any;
export function deserialize(cls: any, json: any, options?: any): any;
export function deserializeArray(cls: any, json: any, options?: any): any;
export function plainToClass(cls: any, plain: any, options?: any): any;
export function plainToClassFromExist(clsObject: any, plain: any, options?: any): any;
export function serialize(object: any, options?: any): any;
