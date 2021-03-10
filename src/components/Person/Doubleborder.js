import classes from "./Doubleborder.module.css";
const Doubleborder = ({children}) => {
    return ( <div>
        <button className={classes.doubleborder}>{children}</button>
    </div> );
}
 
export default Doubleborder;