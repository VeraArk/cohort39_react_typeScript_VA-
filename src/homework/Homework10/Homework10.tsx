import { useState, useEffect } from "react";
import axios, {AxiosError} from "axios";

import UniCard from "components/UniCard/UniCard"
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { PageWrapper, CardsContainer, InputContainer} from "./styles"
import {InfoAboutUni} from "./types"


function Homework10(){

    const [infoAboutUni, setInfo] = useState<InfoAboutUni | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);

    const [infoAboutCountry, setSubmittedValue] = useState('');

    const getInfoAboutCountry = () => {
        setSubmittedValue(infoAboutCountry);
      };


    const UNI_INFO_URL: string =
    "http://universities.hipolabs.com/search?country=COUNTRY";

    //const newUrl = UNI_INFO_URL.replace(/country/g, {infoAboutCountry});
    
    return <PageWrapper>
        <InputContainer>
        <Input   id = "inputCountry" name = "getCountry"  placeholder = "Entry Country" value={infoAboutCountry} />
        <Button name= "Get info"  onClick={getInfoAboutCountry}/>
        <p>Вы ввели: {infoAboutCountry}</p>
        </InputContainer>

     <CardsContainer>
    <UniCard name= "BSU" webSite= "https://bsu.by/en/"/>
    <UniCard name= "BSU" webSite= "https://bsu.by/en/"/>
    <UniCard name= "BSU" webSite= "https://bsu.by/en/"/>
    </CardsContainer>
    </PageWrapper>
}

export default Homework10