
import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
        if(err) throw err;
        console.log("The file has been saved")
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });





/* 
1. use the inqurer np package to get user input.
2. use the qr img npm pack to turn the user entered url int a qr code img
3. create a txt file to save the user input using the native fs node module
*/

