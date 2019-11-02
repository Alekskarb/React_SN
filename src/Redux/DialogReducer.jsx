const ADD_MESS = 'ADD_MESS';
const UP_DATE_MESS_TEXT = 'UP_DATE_MESS_TEXT';

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
    newMessText: ''
}



const dialogReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_MESS:
            let newMessText = state.newMessText;
            return {...state, newMessText: '', myMess: [...state.myMess, {id: 5, message: newMessText}]}
        case UP_DATE_MESS_TEXT:
            return {
                ...state, newMessText: action.newMess};
        default:
            return state;
    }
}

export const addMessCreator = () => ({type: ADD_MESS})
export const updateMessTextCreator = (body) => ({type: UP_DATE_MESS_TEXT, newMess: body})

export default dialogReducer;