
let initialState = {
    speakers: [
        {id: 1, nik: 'Dev'},
        {id: 2, nik: 'Jun'},
        {id: 3, nik: 'HR'},
        {id: 4, nik: 'PM'}],
    speaks: [
        {id: 1, speaks: 'Very good'},
        {id: 2, speaks: 'Good Idea'},
        {id: 3, speaks: 'some Bitch'},
        {id: 4, speaks: 'Real guy'}]
}

const sidebarReducer = (state=initialState, action) => {
    return state;
}

export default sidebarReducer;
