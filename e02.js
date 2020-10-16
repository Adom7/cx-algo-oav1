var str = "abcdefghijklmnopqrstuvwxyz";


function IsAPanagram(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)
  
      if (code >= 96 && code <= 122) {
        count++
      }
    }
  
    return count

//     if (count === 26 ){
// console.log("c'est good");
//     }else{
//         console.log("c'est pas good");
//     }
  }
  console.log('nombre de lettre de lalphabet ', IsAPanagram("abcdDEZdd"))

  
//   console.log('nWord:', howManyCamelCase("jeSuisDylanTest"))