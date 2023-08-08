--Retrieve all movies along with their genres:

SELECT Movies.title, GROUP_CONCAT(Genres.name) AS genres
FROM Movies
LEFT JOIN MovieGenres ON Movies.movie_id = MovieGenres.movie_id
LEFT JOIN Genres ON MovieGenres.genre_id = Genres.genre_id
GROUP BY Movies.movie_id;

--Retrieve all reviews for a specific movie:

SELECT Users.username, Reviews.rating, Reviews.review_text
FROM Reviews
JOIN Users ON Reviews.user_id = Users.user_id
WHERE Reviews.movie_id = {desired_movie_id};

--Retrieve all artists and their roles for a specific movie:

SELECT Artists.name, GROUP_CONCAT(Roles.name) AS roles
FROM Artists
JOIN MovieArtists ON Artists.artist_id = MovieArtists.artist_id
JOIN Roles ON MovieArtists.role_id = Roles.role_id
WHERE MovieArtists.movie_id = {desired_movie_id}
GROUP BY Artists.artist_id;

