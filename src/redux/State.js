let rerenderEntireTree = () => {
  console.log('State changed')
}

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hello, my friend!', likesCount: 17},
      {id: 2, message: 'How are you?', likesCount: 23}],
    newPostText: 'Have fun'
    },
  
  dialogsPage: {  
    messagesData: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
  ],
    dialogsData: [
    {id: 1, name: 'Polina'},
    {id: 2, name: 'Irina'},
    {id: 3, name: 'Anfisa'},
    {id: 4, name: 'Yulia'},
    {id: 5, name: 'Miya'}
  ],
  newMessage: 'Have fun'}

}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
}

export const sendMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessage
  }
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessage = '';
  rerenderEntireTree();
  }

export const updateNewMessage = (newMessage) => {
  state.dialogsPage.newMessage = newMessage;
  rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer};
export default state;