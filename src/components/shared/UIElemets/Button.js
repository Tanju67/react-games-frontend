import classes from "./Button.module.css";

function Button({ className, children, onClick, id }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`${classes.button} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
