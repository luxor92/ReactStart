let store = {
  _state: {
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

  },
  getState () {return this._state},
  _callbackSubscriber () {console.log('State changed')},
  addPost () {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callbackSubscriber(this._state);
    },
  sendMessage () {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessage
    }
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessage = '';
    this._callbackSubscriber(this._state);},
  updateNewMessage (newMessage) {
    this._state.dialogsPage.newMessage = newMessage;
    this._callbackSubscriber(this._state);},
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callbackSubscriber(this._state);},
  subscribe (observer) {
    this._callbackSubscriber = observer}
  }


export default store;
window.store = store;