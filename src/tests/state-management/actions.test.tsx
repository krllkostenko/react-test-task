import { login, logout } from "../../state-management/actions/index";
import { LOGIN, LOGOUT } from "../../state-management/types";

describe("login", () => {
  it("returns an action with type 'LOGIN'", () => {
      const action = login();
      expect(action).toEqual({type:LOGIN});
  });
});

describe("logout", () => {
    it("returns an action with type 'LOGOUT'", () => {
        const action = logout();
        expect(action).toEqual({type:LOGOUT});
    });
  });
  

