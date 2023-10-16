const humanizeDuration = require('humanize-duration');
const { loadJSONResume } = require('./tools/resume');

// Human readable month digit mapping
const months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
};

exports.onCreateWebpackConfig = async ({ actions, plugins }) => {
  const resume = loadJSONResume();

  // Convert from JSONResume format to something more directly usable by the Gatsby setup
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env.RESUME_BASICS': JSON.stringify({
          name: resume?.basics?.name,
          email: resume?.basics?.email,
          summary: resume?.basics?.summary
        }),
        'process.env.RESUME_TWITTER': JSON.stringify(resume?.basics?.profiles?.find(p => p.network === 'Twitter')),
        'process.env.RESUME_LINKEDIN': JSON.stringify(resume?.basics?.profiles?.find(p => p.network === 'LinkedIn')),
        'process.env.RESUME_GITHUB': JSON.stringify({
          network: 'GitHub',
          username: resume.basics.url.replace('https://github.com/', ''),
          url: resume.basics.url
        }),
        'process.env.RESUME_WORK': JSON.stringify(
          resume.work.map((work, i) => {
            const startDate = work.startDate.split('-');
            const prev = resume.work[i - 1];
            let endDate = work.endDate;

            if (!endDate && prev && prev?.name === work?.name) {
              // same company, just position change
              // use position change date as end date
              endDate = prev.startDate;
            }

            return {
              company: work.name,
              begin: {
                month: months[startDate[1]],
                year: startDate[0]
              },
              duration: endDate
                ? humanizeDuration(new Date(`${endDate} PST`).getTime() - new Date(`${work.startDate} PST`).getTime(), {
                    round: true,
                    units: ['y', 'mo']
                  })
                : null,
              occupation: work.position,
              description: work.summary || ''
            };
          })
        )
      })
    ]
  });
};
