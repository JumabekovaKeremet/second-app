import classes from "./Inset.module.css";
const Inset = ({children}) => {
    return ( <div>
        <button className={classes.inset}>{children}</button>
    </div> );
}
 
export default Inset;