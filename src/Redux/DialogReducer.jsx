let ADD_MESS = 'ADD-MESS';
let UPDATE_MESS_TEXT = 'UPDATE-MESS-TEXT';

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
    newMessText: 'All right'
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESS:
            let mess = state.newMessText;
            return {
                ...state, newMessText: '', myMess: [...state.myMess, {id: 5, message: mess}],
            };
        case UPDATE_MESS_TEXT:
            return {
                ...state, newMessText: action.messPost
            };
        default:
            return state;
    }
};

export const addMessActionCreator = () => ({type: ADD_MESS});
export const updateMessTextActionCreator = (mess) => ({type: UPDATE_MESS_TEXT, messPost: mess});

export default dialogReducer;