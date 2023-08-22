import classes from './Status.module.css';

const STATE = {
    ready: ['Свободен', '#A3BE8C'],
    blocked: ['Заблокирован', '#BF616A'],
    inGame: ['Играет', '#EBCB8B'],
    offside: ['Вне игры', '#E5E9F0'],
};

function StatusM({state='offside', children}) {
    const style = {
        color: (state === 'offside') ? '#2E3440' : '#ECEFF4',
        background: STATE[state][1],
    };

    return (
        <p style={style} className={classes.statusM}>
            {children || STATE[state][0]}
        </p>
    )
}

export default StatusM;