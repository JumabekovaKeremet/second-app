const Wealth = ({items}) =>{
    return items.map(item=>{
        return <li>{item.name} - {item.wealth}</li>;
    });
}
export default Wealth;