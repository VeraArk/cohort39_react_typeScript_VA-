import {useNavigate} from "react-router-dom"


import {PageWrapper} from "./styles."
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

    return<PageWrapper> Information about company
        <Button name ="Go to Home Page" onClick={goToHomePage}/>
        <Button name ="Go back" onClick={goBack}/>
    </PageWrapper>
}
export default About