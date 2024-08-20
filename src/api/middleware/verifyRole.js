const verifyRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.role) return res.sendStatus(401); //Unauthorized
    const allowedRolesArray = [...allowedRoles];
    const result = allowedRolesArray.find(
      (allowedRole) => allowedRole == req.role,
    );
    if (!result) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRole;
