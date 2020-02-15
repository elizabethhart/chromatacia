export interface Book {
    id: number,
    title: string,
    author: string,
    pages: number,
    goodReadsRating: string,
    goodReadsReviewCount: number
}

export interface Books {
    [index: number]: any
}

export interface Month {
    id: number;
    name: string,
    year: number,
    bookId: number,
}

export interface Member {
    id: number,
    name: string,
}