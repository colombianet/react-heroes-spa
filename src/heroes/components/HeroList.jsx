import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ]) ;
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn animate__faster">
            {
                heroes.map(heroe => (
                    <HeroCard key={heroe.id} {...heroe} />
                ))
            }
        </div>
    )
}
