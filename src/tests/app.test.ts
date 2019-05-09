import App from '../app';
import * as express from 'express';

(express as any).listen = jest.fn();

describe('App', () => {
  let instance: App;

  it('should be able to be instantiated', () => {
    instance = new App([]);

    expect(instance.app).toBeDefined();
  });
});
