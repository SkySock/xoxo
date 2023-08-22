import classes from './Message.module.css';

function Message({msg}) {
    const {name, time, content, isMy, mode} = msg;
    const messageTypeClass = (isMy) ? classes.me : classes.other;
    const modeClass = (mode === 'x') ? classes.x : classes.zero;

    return (
        <div className={[classes.message, messageTypeClass].join(' ')}>
            <div className={classes.msgHeader}>
                <div className={[classes.subjectName, modeClass].join(' ')}>{name}</div>
                <div className={classes.time}>{time}</div>
            </div>
            <div className="msg-body">{content}</div>
        </div>
    )
}

export default Message;