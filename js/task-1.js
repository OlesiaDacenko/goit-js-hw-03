function slugify(title) {
  // нижній регістр
  //  виставити пробіли
  // Об'єднуємо слова за допомогою тире

  const lowerCaseTitle = title.toLowerCase();

  const words = lowerCaseTitle.split(" ");

  const slug = words.join("-");

  return slug;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"