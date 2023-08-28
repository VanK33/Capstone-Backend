const knex = require("knex")(require("../knexfile"));
const verifyToken = require("../middleware/auth-middleware");

const signUp = async (req, res) => {
  try {
    const { contributor_name, username, password } = req.body;

    const existingUser = await knex("contributors")
      .where("username", username)
      .first();

    if (existingUser) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const newUser = {
      contributor_name,
      username,
      password: hashed_password,
    };

    await knex("contributors").insert(newUser);

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: `Error registring user ${username}` });
  }
};

const logIn = async (_req, res) => {
  try {
    const user = await knex("contributors").where("username", username).first();

    if (!user) {
      return res.status(401).json({
        message: "invalid credentails",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "invalid credentails",
      });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "invalid credentails",
    });
  }
};

const getProfile = async (req, res) => {
  const { id, username } = req.user;

  const user = await knex("contributors").where("id", id).first();
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const userProfile = {
    id: user.id,
    username: user.username,
    contributor_name: user.contributor_name,
    // TODO: if future add more content related to the user
    // remeber to link them here.
  };

  return res.status(200).json(userProfile);
};

module.exports = {
  signUp,
  logIn,
  getProfile: [verifyToken, getProfile],
};
