// replace Math.random for reproducibility, see https://gist.github.com/mathiasbynens/5670917
Math.random = (function() {
    var seed = 0x2F6E2B1;
    return function() {
        // Robert Jenkins’ 32 bit integer hash function
        seed = ((seed + 0x7ED55D16) + (seed << 12))  & 0xFFFFFFFF;
        seed = ((seed ^ 0xC761C23C) ^ (seed >>> 19)) & 0xFFFFFFFF;
        seed = ((seed + 0x165667B1) + (seed << 5))   & 0xFFFFFFFF;
        seed = ((seed + 0xD3A2646C) ^ (seed << 9))   & 0xFFFFFFFF;
        seed = ((seed + 0xFD7046C5) + (seed << 3))   & 0xFFFFFFFF;
        seed = ((seed ^ 0xB55A4F09) ^ (seed >>> 16)) & 0xFFFFFFFF;
        return (seed & 0xFFFFFFF) / 0x10000000;
    };
}());

letters = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
numbers = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26);
colors  = new Array("FF","CC","99","66","33","00");

var endResult;

function doTest()
{
   endResult = "";

   // make up email address
   for (var k=0;k<4000;k++)
   {
      username = makeName(6);
      (k%2)?email=username+"@mac.com":email=username+"(at)mac.com";

      // validate the email address
      var pattern = /^[a-zA-Z0-9\-\._]+@[a-zA-Z0-9\-_]+(\.?[a-zA-Z0-9\-_]*)\.[a-zA-Z]{2,3}$/;

      if(pattern.test(email))
      {
         var r = email + " appears to be a valid email address.";
         addResult(r);
      }
      else
      {
         r = email + " does NOT appear to be a valid email address.";
         addResult(r);
      }
   }

   // make up ZIP codes
   for (var s=0;s<4000;s++)
   {
      var zipGood = true;
      var zip = makeNumber(4);
      (s%2)?zip=zip+"xyz":zip=zip.concat("7");

      // validate the zip code
      for (var i = 0; i < zip.length; i++) {
          var ch = zip.charAt(i);
          if (ch < "0" || ch > "9") {
              zipGood = false;
              r = zip + " contains letters.";
              addResult(r);
          }
      }
      if (zipGood && zip.length>5)
      {
         zipGood = false;
         r = zip + " is longer than five characters.";
         addResult(r);
      }
      if (zipGood)
      {
         r = zip + " appears to be a valid ZIP code.";
         addResult(r);
      }
   }
}

function makeName(n)
{
   var tmp = "";
   for (var i=0;i<n;i++)
   {
      var l = Math.floor(26*Math.random());
      tmp += letters[l];
   }
   return tmp;
}

function makeNumber(n)
{
   var tmp = "";
   for (var i=0;i<n;i++)
   {
      var l = Math.floor(9*Math.random());
      tmp = tmp.concat(l);
   }
   return tmp;
}

function addResult(r)
{
   endResult += "\n" + r;
}

doTest();

// FIXME: Come up with a way of validating this test.
// https://bugs.webkit.org/show_bug.cgi?id=114851
