import classes from "./PersonList.module.css"
const PersonList = ({persons}) => {
    let list = persons.map(person => {
        return (<div className={classes.person}>
            <h1>{person.name}</h1>
            <h3>{person.age}</h3>
            <h4>{person.hobby}</h4>
        </div>)
    });
    return <div>{list}</div>
}
 
export default PersonList;