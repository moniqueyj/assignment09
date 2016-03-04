module.exports = {
  DB: process.env.DB || 'postgres://kvelvtha:51PTXLoKnoeSS74mxhTNkHVmUUEjgJKl@pellefant.db.elephantsql.com:5432/kvelvtha',
  PORT: Number(process.env.PORT) || 3000
}
