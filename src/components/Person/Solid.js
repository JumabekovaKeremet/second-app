import classes from "./Solid.module.css";
const Solid = ({children}) => {
    return ( <div>
        <button className={classes.solid}>{children}</button>
    </div> );
}
 
export default Solid;