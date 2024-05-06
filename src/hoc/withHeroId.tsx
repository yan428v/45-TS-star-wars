import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../utils/useContext.tsx";
import {characters} from "../utils/characters.tsx";
import {defaultHero} from "../utils/constants.tsx";

export const withHeroId =(route) => (Component)=>(props)=>{
    const {heroId} = useParams();
    const {setHero: changeMainHero} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!Object.keys(characters).includes(heroId)){
            navigate(`/${route}/${defaultHero}`);
        }else {
            changeMainHero(heroId);
        }
    },[heroId])

    return (
        <Component {...props}/>
    )
}