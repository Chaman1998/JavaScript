/*
Excercise 4

Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const formatDate = (date = new Date()) => {
    const days = String(date.getDate()).padStart(2,'0');
    const months = String(date.getMonth() + 1).padStart(2,'0');
    const years = date.getFullYear();

    return `${days}/${months}/${years}`;
}

console.log(formatDate());