import classes from "./Modal.module.css";

function Modal({ children, className }) {
  return (
    <div>
      <div className={classes.overlay}></div>
      <div className={`${classes.modal} ${className}`}>{children}</div>
    </div>
  );
}

export default Modal;
