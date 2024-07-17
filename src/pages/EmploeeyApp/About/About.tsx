import {useNavigate} from "react-router-dom"


import {PageWrapper, ButtonContainer} from "./styles."
import Button from "components/Button/Button"

function About(){
    //хук 
const navigate = useNavigate();
const goToHomePage =()=>{
    // в качестве аргумента адрес
    navigate("/");
}

const goBack =()=>{
    navigate(-1);
}

    return<PageWrapper> 
        <ButtonContainer>
        <Button name ="Go to Home Page" onClick={goToHomePage}/>
        <Button name ="Go back" onClick={goBack}/>
        </ButtonContainer>
    </PageWrapper>
}
export default About