module.exports = {
  DB: process.env.DB || 'postgres://mfitnetb:FgmR36Iv4q2R0CbkKdT8JIMzvhz__UXP@pellefant.db.elephantsql.com:5432/mfitnetb',
  PORT: Number(process.env.PORT) || 3000
}
