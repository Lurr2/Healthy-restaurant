import classes from './Button.module.scss';

const Button = buttonText => {

    return (
        <button className={classes.btn}>{buttonText.buttonText}</button>
    )

};

export default Button;