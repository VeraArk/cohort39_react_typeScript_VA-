import {Joke} from "homework/Homework09/types";

export interface JokeCardProps{
    randomJoke: Joke| undefined; 
    error?: string | undefined;
}
