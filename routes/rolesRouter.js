const express = require("express");
const {
  getAllRoles,
  getRolesById,
  deleteRole,
  createRole,
  updateRole,
} = require("../controller/rolesController");

const router = express.Router();

router.post("/roles", createRole);
router.get("/roles", getAllRoles);
router.get("/roles/:id", getRolesById);
router.patch("/roles/:id", updateRole);
router.delete("/roles/:id", deleteRole);

module.exports = router;
