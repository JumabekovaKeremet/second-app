import classes from "./Dotted.module.css";
const Dotted = ({children}) => {
    return ( <div>
        <button className={classes.dotted}>{children}</button>
    </div> );
}
 
export default Dotted;