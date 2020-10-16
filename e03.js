function marsos(str){
            const chunk = str.match(/.{1,3}/g);
                for (let i = 83; i <= 90; i++) {
                  let letter = String.fromCharCode(i);
              
                  if (!str.toUpperCase().includes(letter)) {
                    return false
                  }
                }
              
                return true
              
};


console.log(marsos("SOFSOSSISSOW"))