export interface Movie {
    id: number;
    name: string;
    categoryId: number;
    categoryName?: string;
    imgUrl: string;
    imdbUrl: string;
}

export interface DialogData {
    movie: Movie,
    edit: boolean
}