import classes from "./Dashed.module.css";
const Dashed = ({children}) => {
    return ( <div>
        <button className={classes.dashed}>{children}</button>
    </div> );
}
 
export default Dashed;