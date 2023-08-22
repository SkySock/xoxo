import classes from './Fade.module.css';

function Fade({position='top'}) {
    let pos = classes.fadeTop;
    if (position === 'bottom') {
        pos = classes.fadeBottom;
    }
    return (
        <div className={pos}></div>
    )
}

export default Fade;