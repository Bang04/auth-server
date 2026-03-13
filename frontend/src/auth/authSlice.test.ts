// authSlice.test.ts
import { describe, it, expect } from "vitest";
import authReducer, { login, logout } from "./authSlice";

describe("authSlice", () => {

  it("로그인 시 token과 userId가 저장되어야 한다", () => {
    const initialState = {
      token: null,
      userId: null,
      error: null,
    };

    const action = login({
      token: "test-token",
      id: "testUser",
    });

    const state = authReducer(initialState, action);

    expect(state.token).toBe("test-token");
    expect(state.userId).toBe("testUser");
  });

  it("로그아웃 시 state가 초기화되어야 한다", () => {
    const initialState = {
      token: "abc",
      userId: "user1",
      error : null
    };

    const state = authReducer(initialState, logout());

    expect(state.token).toBe(null);
    expect(state.userId).toBe(null);
  });

});