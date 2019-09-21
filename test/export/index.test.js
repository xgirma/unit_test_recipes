import Rectangle from '../../src/export';

describe('Export', () => {
  it('should export (class)', () => {
    expect(!!Rectangle).toEqual(true, 'export (class) exists');
    expect(typeof Rectangle).toEqual('function', 'export (class) exists');
  });
});
