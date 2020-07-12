import validator from 'validator';

const initErrors = () => {
    return {
        id: 0,
        name: 0,
        imgUrl: 0,
        imdbUrl: 0,
        category: 0
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

const removeUnnecessaryFields = (movie) => {
    movie.category = movie.categoryId
    delete movie.categoryId
    delete movie.categoryName
}

export const validateMovie = (movies, movie) => {
    let errors = initErrors()
    const enumErrors = errorTypes()

    removeUnnecessaryFields(movie)

    for (const [key, value] of Object.entries(movie)) {
        switch (key) {
            case 'id':
                if (!validator.isEmpty(value.toString()) && value !== 0) {
                    errors[key] = enumErrors['id - not empty']
                }
                break;
            case 'imgUrl':
                if (!validator.isURL(value) && !(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(value))) {
                    errors[key] = enumErrors['wrong url']
                }
                break;
            case 'imdbUrl':
                if (!validator.isURL(value)) {
                    errors[key] = enumErrors['wrong url']
                }
                break;
            case 'name':
                if (movies.find(existMovie => existMovie.name == value)) {
                    errors['name'] = enumErrors['name - movie exists']
                }
                else if (!validator.isAlpha(value)) {
                    errors[key] = enumErrors['name - not English']
                }
                else if (!validator.isByteLength(value, [{ max: 30 }])) {
                    errors[key] = enumErrors['name - over 30 characters']
                }
                break;
            default:
                if (validator.isEmpty(value.toString()) || value == 0) {
                    errors[key] = enumErrors['empty']
                }
        }
    }
    return errors
}
