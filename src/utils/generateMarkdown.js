// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if(!license){
    return "";
  }
  else{
    const selectedLicenseList = licenseList.filter(item => item.name === license);
    return selectedLicenseList[0].badge;
  }
   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  const selectedLicenseList = licenseList.filter(item => item.name === license)
  return selectedLicenseList[0];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

    if (!license) {
      return 'No License takan yet.';
    }
    const selectedLicense = renderLicenseLink(license);
    return `
This repository is licensed under the [${license}](${selectedLicense.link}) license.
    ${selectedLicense.noticeText}
    `;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}
  
  
  ## Description
  ${data.projectDesc}
  
  ## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)


  ## Installation
  To install following dependencies run the following command.
    ${data.dependencies}

  ## Usage
  ${data.usage}
  
  ## License 
  ${renderLicenseSection(data.license)}
  
  ## contribution
  
  
  ## Tests
  To run the tests,run the following command:
    ${data.testCommand}
  
  ## questions
  
  If you have any additional questions about the repo, open an issue or contact me directly at ${data.email}.
  You can fine more of my work at [${data.username}](https://github.com/${data.username})
  
  

 
`;
};

const licenseList = [
  {
    name:"MIT",
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT",
    noticeText:'MIT License ' +
    'Copyright (c) [year] [fullname]'+
    'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:' +
    'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. ' +
    'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
  },
  {
    name:"GNU GPLv3",
    badge: "[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://opensource.org/licenses/MIT"
  },
  {
    name:"Mozilla Public License 2.0",
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/MIT"
  },
  {
    name:"Apache 2.0",
    badge: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/MIT"
  },
  {
    name:"BSD 3-Clause",
    badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    link: "https://opensource.org/licenses/BSD-3-Clause"
  },
  {
    name:"Unlicense",
    badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    link: "http://unlicense.org/"
  }

]
module.exports = generateMarkdown;
