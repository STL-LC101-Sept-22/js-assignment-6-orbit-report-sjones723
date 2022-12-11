import { Satellite } from './satellite';

describe('Satellite', () => {
  let satellite: Satellite;
  beforeEach(() => {
    satellite = new Satellite("foo", "bar", "baz", "lur", false);
  });

  afterEach(() => {
	  satellite = null;
  });

  it('should create an instance', () => {
    expect(satellite).toBeTruthy();
  });

  it('should contain an isSpaceDebris method', () => {
    expect(satellite.isSpaceDebris).toEqual(jasmine.any(Function));
  });

  it('isSpaceDebris should return false if not debris type', () => {
    expect(satellite.isSpaceDebris()).toEqual(false);
  });

  it('isSpaceDebris should return true if debris type', () => {
    let junk = new Satellite("foo", "Space Debris", "baz", "lur", false);
    expect(junk.isSpaceDebris()).toEqual(true);
  });

 
});
