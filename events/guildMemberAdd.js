module.exports = {
  name: 'guildMemberAdd',
  execute: (member) => {
    const raidFilter = require('../utils/raidFilter');
    if (raidFilter(member)) {
      member.ban({ reason: 'Raid detected' });
    }
  },
};
