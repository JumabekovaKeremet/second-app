import classes from "./Ridge.module.css";
const Ridge = ({children}) => {
    return ( <div>
        <button className={classes.ridge}>{children}</button>
    </div> );
}
 
export default Ridge;