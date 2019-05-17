var crypto = require('crypto');

var hash = crypto.createHash('sha256');

const chalk = require('chalk');


while(true){


    //!-------------------random string-----------------------------
    // var aftercode;
    //     var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    //     aftercode = '';
    //     for (var i=0; i<length; i++) {
    //         var rnum = Math.floor(Math.random() * chars.length);
    //         aftercode += chars.substring(rnum,rnum+1);
    //     }
    //     return aftercode;
    // }
    // makeid(20);
    //!-------------------random string-----------------------------



    var elem  = 'Hossein Asmand juneghani'

    //*-------------------capitalization----------------------------
    elem  = elem .split('').map(function(v) {
      var chance = Math.round(Math.random());
      return v = chance ? v.toUpperCase() : v.toLowerCase();
    }).join('');
    //*-------------------capitalization----------------------------

    var code  = 'I am '+ elem+' and my student no is 9413088001.'


    var hash = crypto.createHash('sha256').update(code).digest('hex');

    // if the last digits = 1111 :
    var lastFour = hash.substr(hash.length - 4);
    if(lastFour == '1111')
    {
        console.log(chalk.yellow('The code is: '+code+'\n'));

        //console.log('%c%s', 'color: #35fa35', );
        console.log(chalk.blue ('The Hash is: '+hash+'\n'));
        console.log(chalk.green('--------------I have Found it--------------'));
        console.log(chalk.red('--------------I have Found it--------------'));
        console.log(chalk.magentaBright('--------------I have Found it--------------'));
        console.log(chalk.magentaBright(lastFour));
        return true;

    }
}



