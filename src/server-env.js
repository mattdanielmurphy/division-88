require('dotenv').config()

module.exports = {
  env: {
    db: { password: process.env.DB_PASSWORD },
    client: { id: process.env.CLIENT_ID, secret: process.env.CLIENT_SECRET },
    token: { secret: process.env.TOKEN_SECRET },
  },
}
