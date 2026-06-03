const spamThreshold = 10;
const spamCooldown = new Map();

module.exports = (message) => {
  const userId = message.author.id;
  const now = Date.now();

  if (spamCooldown.has(userId)) {
    const cooldown = spamCooldown.get(userId);
    if (now - cooldown < 1000) {
      const recentMessages = message.channel.messages.cache.filter((m) => m.author.id === userId && m.createdTimestamp > now - 1000);
      if (recentMessages.size > spamThreshold) return true;
    }
  }

  spamCooldown.set(userId, now);

  return false;
};
