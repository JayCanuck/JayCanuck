const fs = require('fs');
const path = require('path');
const siteConfig = require('../data/siteConfig');

// Support a local debug/development copy of the JSONResume at ./data/resume.json
const localResume = path.join(__dirname, '..', 'data', 'resume.json');

// Load JSONResume from environment variable or local ./data/resume.json
const loadJSONResume = () => {
  let resume = process.env.JSONRESUME && JSON.parse(process.env.JSONRESUME);

  // Attempt to load debug/development local resume.json data file
  if (fs.existsSync(localResume)) {
    try {
      resume = JSON.parse(fs.readFileSync(localResume, { encoding: 'utf8' }));
    } catch (e) {
      console.error('Failed to load ./data/resume.json');
    }
  }

  return resume;
};

// Takes a JSONResume object and writes it to ./resume.json to be used with PDF export
// Overrides summary and skills with data from ./data/siteConfig
const writeJSONResumeForPDF = resume => {
  resume.basics.summary = siteConfig.authorDescription.replace(/\s*<br\s*[/]?>\s*/g, ' ');
  delete resume.basics.label;
  resume.skills = siteConfig.skills.map(skill => ({ name: skill.name }));
  fs.writeFileSync(path.join(__dirname, '..', 'resume.json'), JSON.stringify(resume, null, '  '));
};

// Called directly from commandline
if (require.main === module) {
  writeJSONResumeForPDF(loadJSONResume());
}

module.exports = {
  loadJSONResume,
  writeJSONResumeForPDF
};
