export default (state, obj) => {
    switch (obj.type) {
        case "ADD_CART":
            if (!obj.item.quantity) obj.item.quantity = 1;
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].description === obj.item.description && state.cart[i].cost === obj.item.cost) {
                    state.cart[i].quantity++;
                    return state;
                }
            }
            state.cart.push(obj.item);
            return state;
        case "SET_INFO_JSON":
            return { ...state, websiteInfo: obj.payload }
        default: return state;
    }
}