
    function howManyCamelCase(str) {
        var count=0,len=str.length;
        for(var i=0;i<len;i++) {
          if(/[A-Z]/.test(str.charAt(i+1))) count++;
        }
        return count;
      }
console.log(howManyCamelCase(process.argv[2].toString()));
