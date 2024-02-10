function slugify(string) {
console.log(string.toLowerCase().split(' ').join('-'));
return string
}
// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

slugify('Top 10 benefits of React framework') 
slugify('Azure Static Web Apps are Awesome') 
slugify('Technical writing tips for non-native English speakers') 