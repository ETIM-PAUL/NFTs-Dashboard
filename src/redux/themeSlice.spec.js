import changeThemeReducer, { changeThemeStatus } from "./themeSlice";

describe("theme change", () => {
  const initialState = {
    theme: "light",
  };
  it("should handle initial state", () => {
    expect(changeThemeReducer(undefined, { type: "unknown" })).toEqual({
      value: "light",
    });
  });

  it("should handle theme change", () => {
    const actual = changeThemeReducer(initialState, changeThemeStatus("dark"));
    expect(actual.theme).toEqual("dark");
  });
});
