// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movies) => {
        return movies.director;
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovie = moviesArray.filter((movie) => {
        return movie.director.includes('Spielberg') && movie.genre.includes('Drama')
    })
    return filteredMovie.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const filteredMovieWithScore = moviesArray.filter((movie) => {
        return movie.score != null;
    })

    const totalScore = filteredMovieWithScore.reduce(function(acc, movie){
        return acc + movie.score;
    }, 0)

    const averageScore = totalScore == [] ? 0 : Math.round((totalScore/moviesArray.length)*100)/100

    return averageScore

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes('Drama')
    })

    const scoreDrama = dramaMovies.reduce(function(acc, movie) {
        return acc + movie.score
    }, 0)

    const averageDramaScore = scoreDrama == [] ? 0 : Math.round((scoreDrama/dramaMovies.length)*100)/100

    return averageDramaScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMoviesArray = [...moviesArray]

    const movieByYear = copyMoviesArray.sort((a, b)=> {
        return a.year == b.year ? a.title.localeCompare(b.title) : a.year - b.year})

    return movieByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderByTitle = moviesArray
        .map(movie => movie.title)
        .sort((a,b) => a === b ? 0 : a < b ? -1 : 1)
        .slice(0, 20)

    return orderByTitle
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
