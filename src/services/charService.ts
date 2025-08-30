import Character from '../models/character';
import { getCache, setCache } from '../utils/cache';
import { measure } from '../decorators/measure';


interface Filter {
    status?: string;
    species?: string;
    gender?: string;
    name?: string;
    origin?: string;
    limit?: number;
    offset?: number;
}


export const findCharacters = async (filter: Filter = {}) => {
    const cacheKey = `characters:${JSON.stringify(filter)}`;
    const cached = await getCache(cacheKey);
    if (cached) return JSON.parse(cached);


    const where: any = {};
    if (filter.status) where.status = filter.status;
    if (filter.species) where.species = filter.species;
    if (filter.gender) where.gender = filter.gender;
    if (filter.origin) where.origin = filter.origin;
    if (filter.name) where.name = { $like: `%${filter.name}%` };


    const chars = await Character.findAll({ where, limit: filter.limit, offset: filter.offset });
    await setCache(cacheKey, JSON.stringify(chars), 60 * 60);
    return chars;
};

export const findCharactersWithMeasure = measure(findCharacters);