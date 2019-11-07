import { login, logout } from "../../state-management/actions";
import reducer from '../../state-management/reducers/index'

describe('auth',()=>{
    it('returns state: {isLoggedIn:true} if login() is passed',()=>{
  const loginState = reducer(undefined,login());
        expect(loginState).toEqual({auth:{isLoggedIn:true}});
    });
    it("returns initial state: {isLoggedIn: false} if logout() is passed", () => {
        const logoutState = reducer(undefined,logout());
        expect(logoutState).toEqual({auth:{isLoggedIn:false}});
    });
});
