const knex = require("knex")(require("../knexfile"));

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

const logIn = async (req, res) => {
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

  const token = jwt.sign({ id: user.id, username: user.username }, "");
};

module.exports = {
  signUp,
};
