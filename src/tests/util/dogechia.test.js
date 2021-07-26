const dogechia = require("../../util/dogechia");

describe("dogechia", () => {
  it("converts number mojo to dogechia", () => {
    const result = dogechia.mojo_to_dogechia(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to dogechia", () => {
    const result = dogechia.mojo_to_dogechia("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to dogechia string", () => {
    const result = dogechia.mojo_to_dogechia_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to dogechia string", () => {
    const result = dogechia.mojo_to_dogechia_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number dogechia to mojo", () => {
    const result = dogechia.dogechia_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string dogechia to mojo", () => {
    const result = dogechia.dogechia_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = dogechia.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = dogechia.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = dogechia.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = dogechia.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = dogechia.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = dogechia.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
