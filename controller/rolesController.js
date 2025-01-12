const db = require("../config/db");

const getAllRoles = (req, res) => {
  const query = "select * from roles";
  db.query(query, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(result);
  });
};

const getRolesById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const query = "select * from roles where role_id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0)
      return res.status(404).send({ message: "Roles not found" });
    res.status(200).send(result[0]);
    console.log(result);
  });
};

const createRole = (req, res) => {
  const { role_name, role_description } = req.body;
  const query = "insert into roles (role_name, role_description) values(?,?)";
  db.query(query, [role_name, role_description], (err, result) => {
    if (err) return res.status(500).send({ message: err });
    const newQuery = "select * from roles where role_id=?";
    db.query(newQuery, [result.insertId], (err, result) => {
      if (err) return res.status(500).send({ message: err });
      res
        .status(201)
        .send({ message: "Role created successfully", data: result[0] });
    });
  });
};

const updateRole = (req, res) => {
  const id = req.params.id;
  const { role_name, role_description } = req.body;
  const query =
    "update roles set role_name=?,role_description=? where role_id=?";
  db.query(query, [role_name, role_description, id], (err, result) => {
    if (err) return res.status(500).send({ message: err });
    const newQuery = "select * from roles where role_id=?";
    db.query(newQuery, [id], (err, result) => {
      res
        .status(200)
        .send({ message: "updated successfully", data: result[0] });
    });
  });
};

const deleteRole = (req, res) => {
  const id = req.params.id;
  const query = "delete from roles where role_id=?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).send({ message: err });
    res.status(200).send({ message: `role ${id} deleted successfully` });
    console.log(result);
  });
};

module.exports = {
  getAllRoles,
  getRolesById,
  createRole,
  updateRole,
  deleteRole,
};
