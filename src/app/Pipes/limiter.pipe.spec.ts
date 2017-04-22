import { LimiterPipe } from './limiter.pipe';

describe('LimiterPipe', () => {
  it('create an instance', () => {
    const pipe = new LimiterPipe();
    expect(pipe).toBeTruthy();
  });
});
