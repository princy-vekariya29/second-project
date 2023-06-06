
function Icon() {
    return (
        <div className="iconimg ">
            <ul style={{listStyle:"none",display:"flex"}}>
                <li>
                    <img src="public/images/search.png" alt="search" />
                </li>
                <li>
                    <img src="public/images/cart.png" alt="cart" />
                </li>
                <li>
                    <img src="public/images/user.png" alt="user" />
                </li>
                <li>
                    <img src="public/images/menu.png" alt="menu" />
                </li>
            </ul>
        </div>
    )  
}
export default Icon;