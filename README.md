# RedBooks

RedBooks is a comprehensive API for managing a book database. It allows users to perform CRUD operations, including fetching, creating, updating, and deleting book records. Ideal for developers building applications that require book data management, RedBooks is simple to integrate and extend.

## Features
- Fetch books by ID or genre
- Add new books to the database
- Update existing book details
- Delete books by ID
- Case-insensitive search for genres

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/RedBooks.git
    ```
2. Navigate to the project directory:
    ```sh
    cd RedBooks
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Running the API



## Endpoints

### Fetch a Book by ID

- **URL:** `/books/:id`
- **Method:** `GET`
- **Description:** Fetch a single book by its ID.
- **Response:**
    - **200 OK:** Returns the book data.
    - **404 Not Found:** Book not found.

#### Example Request

```
 /books/1
 ```

#### Example Response

```JSON
 {
  "bookID": "1",
  "bookTitle": "To Kill a Mockingbird",
  "bookAuthor": "Harper Lee",
  "bookGenre": "Fiction",
  "bookYear": "1960",
  "bookPublisher": "J.B. Lippincott & Co.",
  "bookPages": 281,
  "bookLanguage": "English"
}

 ```

### Fetch Books by Genre

- **URL:** `/books/genre/:genre`
- **Method:** `GET`
- **Description:** Fetch all books containing the specified genre (case insensitive).
- **Response:**
    - **200 OK:** Returns books matching the genre.
    - **404 Not Found:** No books found.

#### Example Request

```
 /books/genre/epic
 ```

#### Example Response

```JSON
{
  "msg": "Fetched Successfully",
  "count": 2,
  "data": [
    {
      "bookID": "55",
      "bookTitle": "The Divine Comedy",
      "bookAuthor": "Dante Alighieri",
      "bookGenre": "Epic Poetry",
      "bookYear": "1320",
      "bookPublisher": "Various",
      "bookPages": 798,
      "bookLanguage": "Italian"
    },
    {
      "bookID": "69",
      "bookTitle": "The Iliad",
      "bookAuthor": "Homer",
      "bookGenre": "Epic",
      "bookYear": "8th Century BC",
      "bookPublisher": "Various",
      "bookPages": 683,
      "bookLanguage": "Ancient Greek"
    }
  ]
}

 ```

### Create a Book

- **URL:** `/books`
- **Method:** `POST`
- **Description:** Add a new book to the database.
- **Request Body:**
    - **bookID:** string (required)
    - **bookTitle:** string (required)
    - **bookAuthor:** string (required)
    - **bookGenre:** string (required)
    - **bookYear:** string (required)
    - **bookPublisher:** string (optional)
    - **bookPages:** number (optional)
    - **bookLanguage:** string (optional)
- **Response:**
    - **201 Created:** Book successfully created.
    - **400 Bad Request:** Invalid data.

#### Example Request

```JSON

{
  "bookID": "100",
  "bookTitle": "New Book",
  "bookAuthor": "Author Name",
  "bookGenre": "Fiction",
  "bookYear": "2024"
}
 ```

#### Example Response

```JSON
{
  "msg": "Book created successfully",
  "data": {
    "bookID": "100",
    "bookTitle": "New Book",
    "bookAuthor": "Author Name",
    "bookGenre": "Fiction",
    "bookYear": "2024",
    "bookPublisher": "",
    "bookPages": 0,
    "bookLanguage": ""
  }
}
 ```

### Update a Book

- **URL:** `/books/:id`
- **Method:** `PUT`
- **Description:** Update an existing book by its ID.
- **Request Body:** (fields to be updated)
    - **bookTitle:** string (optional)
    - **bookAuthor:** string (optional)
    - **bookGenre:** string (optional)
    - **bookYear:** string (optional)
    - **bookPublisher:** string (optional)
    - **bookPages:** number (optional)
    - **bookLanguage:** string (optional)
- **Response:**
    - **200 OK:** Book successfully updated.
    - **404 Not Found:** Book not found.
    - **400 Bad Request:** Invalid data.

#### Example Request

```JSON

{
  "bookTitle": "Updated Book Title"
}
 ```

#### Example Response

```JSON
{
  "msg": "Book updated successfully",
  "data": {
    "bookID": "100",
    "bookTitle": "Updated Book Title",
    "bookAuthor": "Author Name",
    "bookGenre": "Fiction",
    "bookYear": "2024",
    "bookPublisher": "",
    "bookPages": 0,
    "bookLanguage": ""
  }
}
 ```

### Delete a Book

- **URL:** `/books/:id`
- **Method:** `DELETE`
- **Description:** Delete a book by its ID.
- **Response:**
    - **200 OK:** Book successfully deleted.
    - **404 Not Found:** Book not found.

#### Example Request

```
/books/100
 ```

#### Example Response

```JSON
{
  "msg": "Book deleted successfully"
}
 ```

## Error Handling

All error responses will follow the format:

```JSON
{
  "msg": "Error message describing the issue"
}
 ```

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](https://null) file for details.

## Acknowledgements

Thanks to everyone who contributes to this project and makes it better for the community.

EndFragment
