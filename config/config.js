const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  db_name : "batch7",
  db_username : "postgres",
  db_password: "admin"
}

export default config
