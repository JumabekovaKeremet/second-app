const OrdertList = (props) => {
    let list = [];
    props.items.forEach(item => {
        list.push(<li>{item}</li>)
    })
    
    return <ol>
        {list}
    </ol>
}
 
  export default OrdertList;