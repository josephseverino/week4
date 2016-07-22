function palindrome(str){
    var array  = [];
    for (var i = str.length-1; i > -1; i--){
        array.push(str[i])
    }
   array = array.join('')
    if(array === str){
        return true
    }else{
        return false
    }
}
palindrome('helllo')
palindrome('racecar')



function dashInsert(num){
   var str = num.toString()
   var array = []
   for(var i = 0; i < str.length; i++ ){
       if(i == str.length-1){
           array.push(str[i])
       }else if(str[i]%2 != 0 && str[i+1]%2 !=0){
            array.push(str[i])
            array.push('-')
       }else{
           array.push(str[i])
       }
   }
console.log(array.join(''))
}

dashInsert(95830958309)