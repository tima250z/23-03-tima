var arrays = [null, 123, undefined, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк']
var str = []
var nll = []
var num = []
var und = []

for (var i = 0 ; i < arrays.length; i++){
    str.push(arrays[i])
    var  a = str.filter(r => {return typeof (r) === 'string'})
    num.push(arrays[i])
    var b = num.filter(h => {return typeof (h) === 'number'})
    nll.push(arrays[i])
    var c = nll.filter(v => {return typeof (v) === 'object'})
    und.push(arrays[i])
    var d = und.filter(l => {return typeof (l) === 'undefined'})
}
console.log(a)
console.log(b)
console.log(c)
console.log(d)

var sortArray = []
sortArray.push(a,b,c,d)
sortArray.sort((a,b) => {return b.length - a.length})
console.log(sortArray)
