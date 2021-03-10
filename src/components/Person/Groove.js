import classes from "./Groove.module.css";
const Groove = ({children}) => {
    return ( <div>
        <button className={classes.groove}>{children}</button>
    </div> );
}
 
export default Groove;