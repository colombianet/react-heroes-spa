import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {
    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if( !validPublishers.includes( publisher ) ) {
        return new Error(`${ publisher } is not available publisher`);
    }

    return heroes.filter( h => h.publisher === publisher );
};