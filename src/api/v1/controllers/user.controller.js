const { user } = require("../../../config/database.config")

module.exports = {
  async getUsers(req, res) {
    const users = await user.findAll()
    res.status(200).json({total: users.length,users: users })
  },
}