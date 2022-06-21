const UserService = require("../services/user")

const checkAdmin = async (req, res, next) => {
    console.log(req.headers)
    const user = await UserService.findById(req.headers["user_id"]);
    if (user) {
        if (user.userType === "admin") {
            next();
        } else {
            return res.status(403).send({ message: "Forbidden" })
        }
    } else {
        return res.status(403).send({ message: "Unauthorized" })
    }
}

module.exports = checkAdmin