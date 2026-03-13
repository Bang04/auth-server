import { configureStore } from "@reduxjs/toolkit";
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import authSlice from "../auth/authSlice";
import { Provider } from "react-redux";
import { LoginPage } from "./LoginPage";
import { MemoryRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import userEvent from "@testing-library/user-event";


describe("LoginPage", () => {
    it("로그인 버튼 클릭 시 dispatch가 호출되어야 한다", async () => {
        const store = configureStore({
            reducer: {
                auth: authSlice,
            },
        })

        const spy = vi.spyOn(store, 'dispatch');

        render(
            <Provider store={store}>
                <CookiesProvider>
                    <MemoryRouter>
                        <LoginPage />
                    </MemoryRouter>
                </CookiesProvider>
            </Provider>
        );

      await userEvent.type(
            screen.getByPlaceholderText("you"),
            "test"
        );

        await userEvent.type(
            screen.getByPlaceholderText("••••••••"),
            "1234"
        );

        await userEvent.click(
            screen.getByRole("button", { name: /login/i })
        );
        
        expect(spy).toHaveBeenCalled();
    });
});