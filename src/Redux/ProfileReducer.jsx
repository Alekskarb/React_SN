const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

let initialState = {
    myPost: [{id: 1, message: 'What is your name?', likesCount: 0},
        {id: 2, message: 'My Name is Pawel', likesCount: 456368},
        {id: 3, message: 'My Name is Sanek', likesCount: 34},
        {id: 4, message: 'Very well', likesCount: 45}],
    newPostText: 'samuray'
}

const profileReducer = (state =initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText, likesCount: 1};
            return {...state, myPost: [...state.myPost, newPost], newPostText: ""};
        case UPDATE_POST_TEXT: {
            return  {...state, newPostText: action.newText};
    }
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});

export const updatePostTextCreator = (txt) => ({type: UPDATE_POST_TEXT, newText: txt})

export default profileReducer;
