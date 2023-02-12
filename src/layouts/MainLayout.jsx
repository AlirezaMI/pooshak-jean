import {Outlet} from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import PagesContainer from "../containers/PagesContainer";
import FooterContainer from "../containers/FooterContainer";

const MainLayout = ({mode, handleThemeChange}) => {

    return (
        <>
            <HeaderContainer mode={mode} handleThemeChange={handleThemeChange}/>
            <PagesContainer>
                <Outlet/>
            </PagesContainer>
            <FooterContainer/>
        </>
    )
}

export default MainLayout;