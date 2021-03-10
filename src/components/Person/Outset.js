import classes from "./Outset.module.css";
const Outset = ({children}) => {
    return ( <div>
        <button className={classes.outset}>{children}</button>
    </div> );
}
 
export default Outset;