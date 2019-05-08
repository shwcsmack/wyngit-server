import App from '../app';
import * as express from 'express';

(express as any).listen = jest.fn();

describe('App', () => {
  let instance: App;

  it('should assign the proper properties from constructor', () => {
    instance = new App([], 6000);

    expect(instance.port).toEqual(6000);
    expect(instance.app).toBeDefined();
  });
});
