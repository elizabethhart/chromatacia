import React from 'react'

interface AddBookFormProps {
    books: Book[],
    addBook: any
}

interface AddBookFormState {
    books: any[]
}

interface Book {
    title: string,
    author: string,
    pages: number,
    goodReadsRating: string,
    goodReadsReviewCount: number
}

interface Books {
    [index: number]: any
}

interface Month {
    name: string,
    year: number,
    bookId: number,
}

interface Member {
    name: string,
}

class AddBookForm extends React.Component<AddBookFormProps, AddBookFormState> {
    private titleRef: any
    private authorRef: any
    private pagesRef: any
    private goodReadsRatingRef: any
    private goodReadsReviewCountRef: any

    constructor(props: AddBookFormProps) {
        super(props)

        this.titleRef = React.createRef()
        this.authorRef = React.createRef()
        this.pagesRef = React.createRef()
        this.goodReadsRatingRef = React.createRef()
        this.goodReadsReviewCountRef = React.createRef()
    }

    createBook = (event: any) => {
        event.preventDefault()

        const book = {
            title: this.titleRef.current.value,
            author: this.authorRef.current.value,
            pages: this.pagesRef.current.value,
            goodReadsRating: this.goodReadsRatingRef.current.value,
            goodReadsReviewCount: this.goodReadsReviewCountRef.current.value
        }

        this.props.addBook(book)

        event.currentTarget.reset()
    }

    render() {
        return (
            <form className="book-form" onSubmit={this.createBook}>
                <input name="title" ref={this.titleRef} type="text" placeholder="Title" />
                <input name="author" ref={this.authorRef} type="text" placeholder="Author" />
                <input name="pages" ref={this.pagesRef} type="number" placeholder="Pages" />
                <input name="goodReadsRating" ref={this.goodReadsRatingRef} type="text" placeholder="Goodreads Rating" />
                <input name="goodReadsReviewCount" ref={this.goodReadsReviewCountRef} type="number" placeholder="Goodreads Reviews" />
                <button type="submit">+ Add Book</button>
            </form>
        )
    }

}

export default AddBookForm