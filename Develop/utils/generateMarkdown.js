// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return
  switch (license) {
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break
    case "Boost 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break 
    case "none":
      return ""
      break
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  name,
  description,
  installation,
  usage,
  license,
  contribution,
  tests,
}) {
  return `
  ## ${name} ${renderLicenseBadge(license)}
   
  ## Description 
  ${description}
 
  ## Installation
  ${installation}
 
  ## Usage
  ${usage}

  ## Contributing
  ${contribution}

  ## Tests
  ${tests}
  
  ## License
  ${license}
`;
}

module.exports = generateMarkdown;
