import profileReducer, { addPost, deletePost } from "./profile-reducer";

let action = addPost('yoyoyo')
let state = {
    postsData: [
        { id: 2, message: 'Йоу-йоу!!! 42!', likesCount: 11 },
        { id: 1, message: 'Привет! Я пишу код!', likesCount: 15 },
    ],

}
it('length of posts should be incremented.', () => {
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(3)
});


it('values of new post should be correct.', () => {
    let newState = profileReducer(state, action)
    expect(newState.postsData[0].message).toBe('yoyoyo')
});

it('likes count should be zero.', () => {
    let newState = profileReducer(state, action)
    expect(newState.postsData[0].likesCount).toBe(0)
});

it('after deleting length of posts should be decremented.', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(1)
});