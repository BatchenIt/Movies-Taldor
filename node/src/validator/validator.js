import validator from 'validator';

const initErrors = () => {
    return {
        id: [],
        name: [],
        imgUrl: [],
        imdbUrl: [],
        category: []
    }
}

const errorTypes = () => {
    return Object.freeze(
        {
            'empty': 1,
            'id - not empty': 2,
            'name - not English': 3,
            'name - over 30 characters': 4,
            'name - movie exists': 5,
            'wrong url': 6
        }
    )
}

export const validateMovie = (movies, movie) => {
    let errors = initErrors()
    const enumErrors = errorTypes()
    const existingMovie = movies.find(existMovie => existMovie.name == movie.name);

    if (existingMovie)
        errors[name].push(enumErrors['name - movie exists'])

    for (const [key, value] of Object.entries(movie)) {

        switch (key) {
            case 'id':
                if (!validator.isEmpty(value.toString())) {
                    errors[key].push(enumErrors['id - not empty'])
                }
                break;

            case 'imgUrl':
            case 'imdbUrl':
                if (!validator.isURL(value)) {
                    errors[key].push(enumErrors['wrong url'])
                }

            case 'name':
                console.log('case name, actually', key);
                if (!validator.isAlpha(value)) {
                    errors[key].push(enumErrors['name - not English'])
                }
                if (!validator.isByteLength(value, [{ max: 30 }])) {
                    errors[key].push(enumErrors['name - over 30 characters'])
                }
                break;

            default:
                console.log('case default, actually', key);
                if (validator.isEmpty(value)) {
                    errors[key].push(enumErrors['empty'])
                }
        }
    }

    return errors
}
