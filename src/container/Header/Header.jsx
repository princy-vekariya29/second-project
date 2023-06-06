import Logo from "../../component/Logo/Logo";
import Navlist from "../../component/Navlist/Navlist";
import Icon from "../../icon/icon";

function Header(){
    return(
        <header>
            <div className="container">
                <div className="row">
                    <Logo/>
                    {/* <div className="navicon"> */}
                        <Navlist/>
                        <Icon />
                    {/* </div> */}
                </div>
            </div>
        </header>
    )
}
export default Header;