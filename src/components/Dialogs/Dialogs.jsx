import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messageElements = props.state.messagesData.map( message => <Message message={message.message}/>);
  let newMessage = React.createRef();
  let sendMessage = () => {props.sendMessage()};
  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessage(text)
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messageElements}
        <textarea ref={newMessage} onChange={onMessageChange}></textarea>
        <div><button onClick={sendMessage}>Send message</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
