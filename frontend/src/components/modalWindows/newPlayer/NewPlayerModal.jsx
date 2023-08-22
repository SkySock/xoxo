import classes from './NewPlayer.module.css';
import ModalContainer from "../base/ModalContainer.jsx";
import HeaderString from "../../ui/headerString/HeaderString.jsx";
import InputField from "../../ui/inputField/InputField.jsx";
import PrimaryButton from "../../ui/buttons/primaryButton/PrimaryButton.jsx";
import femaleSVG from '../../../assets/imgs/female.svg';
import maleSVG from '../../../assets/imgs/male.svg';
import closeSvg from '../../../assets/imgs/close.svg';

function NewPlayerModal({closeHandler}) {
    return (
        <ModalContainer>
            <div className={classes.close}>
                <button onClick={closeHandler}>
                    <img src={closeSvg} />
                </button>
            </div>
            <HeaderString>Добавьте игрока</HeaderString>
            <div className={classes.inputName}>
                ФИО
                <InputField placeholder={'Иванов Иван Иванович'}/>
            </div>
            <div className={classes.ageAndSex}>
                <div className={classes.inputAge}>
                    Возраст
                    <InputField type={'number'}/>
                </div>
                <div className={classes.radioSex}>
                    Пол
                    <div className={classes.radioButtons}>
                        <div className={classes.formRadio}>
                            <input id={'female'} type="radio" name="sex" value={'female'}/>
                            <label htmlFor={'female'}><img src={femaleSVG}/></label>
                        </div>
                        <div className={classes.formRadio}>
                            <input id={'male'} type="radio" name="sex" value={'male'}/>
                            <label htmlFor={'male'}><img src={maleSVG}/></label>
                        </div>
                    </div>
                </div>
            </div>

            <PrimaryButton text={'Добавить'}/>
        </ModalContainer>
    )
}

export default NewPlayerModal;