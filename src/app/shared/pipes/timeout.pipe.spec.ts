import { TimeoutPipe } from './timeout.pipe';

describe('TimeoutPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeoutPipe();
    expect(pipe).toBeTruthy();
  });
});
