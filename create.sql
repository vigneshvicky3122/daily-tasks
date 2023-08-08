CREATE TABLE Movies (
    movie_id INT PRIMARY KEY,
    title VARCHAR(255),
    release_date DATE,

);

CREATE TABLE Media (
    media_id INT PRIMARY KEY,
    movie_id INT,
    type ENUM('Video', 'Image'),
    url VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id)
);

CREATE TABLE Genres (
    genre_id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE MovieGenres (
    movie_id INT,
    genre_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id),
    FOREIGN KEY (genre_id) REFERENCES Genres(genre_id)
);


