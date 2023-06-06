import Li from "../Li/Li";

function List(){
    let ulstyle = {display: "flex", justifyContent : "flex-end",listStyle: "none"};
    let listyle = {padding : 10};
    let astyle = {textDecoration : "none",fontSize: 17, color: "black",};

    let listname = ["Home","About Us","Service","Pricing","Products","Blog"]
    
    return(
        <ul style={ulstyle} >{
            listname.map((val)=>{
                return(
                        <Li listyle={listyle} a={astyle} name={val} />
                )
                
            })
        }

        </ul>
    )
}
export default List;