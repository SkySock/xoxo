import classes from './Chat.module.css';
import Messages from './Messages.jsx';
import SendMessage from './SendMessage.jsx';


function Chat() {
    return (
        <div className={classes.chatContainer}>
            <Messages />
            <SendMessage />
        </div>
    )
}

export default Chat;