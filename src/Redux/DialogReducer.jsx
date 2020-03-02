let ADD_MESS = 'ADD-MESS';

let initialState = {
    myDia: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Tanya'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Illya'}],
    myMess: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Im Ok'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'OK'}],
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESS:
            let mess = action.newMessages;
            return {
                ...state, myMess: [...state.myMess, {id: 5, message: mess}],
            };
        default:
            return state;
    }
};

export const addMessActionCreator = (newMessages) => ({type: ADD_MESS, newMessages});

export default dialogReducer;