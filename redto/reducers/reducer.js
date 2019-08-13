export const initialState = {
    items: [
        {
            item: "Code",
            complete: false,
            id: 3417
        },
        {
            item: "Lambda",
            complete: false,
            id: 3418
        },
        {
            item: "Slack",
            complete: false,
            id: 3419
        },
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
        const newItem = {
            item: action.payload,
            complete: false,
            id: Date.now()
        };
        return {
            ...state,
            items: [...state.items, newItem]
        };
        case "TOGGLE_ITEM":
        return {
            ...state,
            items: state.items.map(item => {
                if (action.payload === item.id) {
                    return {
                        ...item,
                        complete: !item.complete
                    };
                }
                return item;
            })
        };
        case "CLEAR_PURCHASED":
            return {
                ...state,
                items: state.items.filter(item => !item.complete)
            };
        default:
            return state;
        }
};