import App from '../app';
//jest.mock('./app.ts');

describe('App', () => {
  let instance: App;

  beforeEach(() => {
    instance = new App([], 6000);
  });

  it('should assign the proper properties from constructor', () => {
    expect(instance.port).toEqual(6000);
    expect(instance.app).toBeDefined();
  });
});
