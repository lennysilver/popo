
function reverse(string) {
    string = string.trim();
    var rev ="";
       for(var i = string.length-1; i >= 0; i--){
          rev +=string[i];
      }
      return rev;
    }
    var string = "hi";
    console.log(reverse1(string))