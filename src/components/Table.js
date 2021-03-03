const Table = ({items}) =>{
    let table =  items.map(item=>{
        return <tr> <td>{item.name}</td>;
        <td>{item.wealth}</td>;
        </tr>
    });
}
export default Table;