import App from './app';

test('app should be able to be instantiated', (): void => {
  const app = new App([], 3000);
  expect(app).toBeDefined();
});
