import classes from './Chat.module.css';
import Message from '../ui/message/Message.jsx';
import {useState} from "react";

const testData = [
    {
        name: 'Плюшкина Екатерина',
        time: '13:40',
        content: 'Ну что, готовься к поражению!!1',
        isMy: false,
        mode: 'x',
    },
    {
        name: 'Пупкин Владлен',
        time: '13:41',
        content: 'Надо было играть за крестики. Розовый — мой не самый счастливый цвет',
        isMy: true,
        mode: 'o',
    },
    {
        name: 'Пупкин Владлен',
        time: '13:45',
        content: 'Я туплю...',
        isMy: true,
        mode: 'o',
    },
    {
        name: 'Плюшкина Екатерина',
        time: '13:47',
        content: 'Отойду пока кофе попить, напиши в тг как сходишь',
        isMy: false,
        mode: 'x',
    },

];

function Messages() {
    const [scrollPosition, setScrollPosition] = useState(0);

    return (
        <>
            <div className={classes.msgsContainer}>

                {testData.map(
                    (msg, idx) =>
                        <Message key={idx} msg={msg} />
                )}
                {!testData.length && <div className={classes.noMessages}>Сообщений еще нет</div>}
            </div>
            {/*<Fade />*/}
            {/*<Fade position='bottom' />*/}
        </>
    )
}

export default Messages;