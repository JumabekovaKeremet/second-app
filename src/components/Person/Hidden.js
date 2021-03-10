import classes from "./Hidden.module.css";
const Hidden = ({children}) => {
    return ( <div>
        <button className={classes.hidden}>{children}</button>
    </div> );
}
 
export default Hidden;