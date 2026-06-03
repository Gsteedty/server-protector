const raidThreshold = 5;
const raidCooldown = new Map();

module.exports = (member) => {
  const guild = member.guild;
  const now = Date.now();

  if (raidCooldown.has(guild.id)) {
    const cooldown = raidCooldown.get(guild.id);
    if (now - cooldown < 60000) {
      const recentMembers = guild.members.cache.filter((m) => m.joinedTimestamp > now - 60000);
      if (recentMembers.size > raidThreshold) return true;
    }
  }

  raidCooldown.set(guild.id, now);

  return false;
};
