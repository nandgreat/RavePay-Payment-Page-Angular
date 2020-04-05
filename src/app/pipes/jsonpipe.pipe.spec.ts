import { Jsonpipe } from './jsonpipe.pipe';

describe('Jsonpipe', () => {
  it('create an instance', () => {
    const pipe = new Jsonpipe();
    expect(pipe).toBeTruthy();
  });
});
