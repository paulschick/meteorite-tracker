import { FormatMassPipe } from "./format-mass.pipe";

describe('FormatMassPipe', () => {
  it("should display 5.00Kg if mass is '5000'", () => {
    // construct a new FormatMassPipe
    let pipe = new FormatMassPipe();

    expect(pipe.transform('5000')).toEqual('5.00Kg');
  })

  it('should display 5.00kg if mass is 5000', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(5000)).toEqual('5.00Kg');
  })

  it('should display 0 if mass is 0', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform(0)).toEqual(0);
  })

  it("should display No Mass if mass is ''", () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('')).toEqual('No Mass');
  })

  it('should display No Mass if mass is hello', () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('hello')).toEqual('No Mass');
  })

  it("should display No Mass is mass is '2020/12/23'", () => {
    let pipe = new FormatMassPipe();

    expect(pipe.transform('2020/12/23')).toEqual('No Mass');
  })

  // it('should display 0.01Kg is mass is 1994/10/31', () => {
  //   let pipe = new FormatMassPipe();

  //   expect(pipe.transform(1994/10/31)).toEqual('0.01Kg');
  // })

  // it('should display if mass is', () => {
  //   let pipe = new FormatMassPipe();


  // })
})
