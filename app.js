// Дан список тегов, например ['li', 'span', 'div', 'span', 'h3', 'a',
// 'div', 'span', 'a', 'li', 'div', 'div’].
// С помощью цикла посчитать каких тегов сколько штук.
// В консоли результат должен вывестись как объект.
// Далее отсортировать полученный объект от большего к меньшему, то есть на
// первом месте должен быть тег, который чаще всего встречается в массиве)

var arr = ['li', 'span', 'div', 'span', 'h3', 'a', "div", "span", "a", "li", "div", "div"];
var newArray = {}

for (var i = 0; i < arr.length; i++) {
    var result = arr[i]
    if (newArray[result]) {
        newArray[result]++
    } else {
        newArray[result] = 1
    }
}
var res = {}
Object.keys(newArray).sort((a, b) => {
    return newArray[b] - newArray[a]
}).forEach(q => {
    res[q] = newArray[q]
})
console.log(res)
