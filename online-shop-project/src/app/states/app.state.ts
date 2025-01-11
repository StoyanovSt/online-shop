import { AuthState } from "./auth/auth.state";
import { CartState } from "./cart/cart.state";

export interface AppState {
    authState: AuthState,
    cartState: CartState
}