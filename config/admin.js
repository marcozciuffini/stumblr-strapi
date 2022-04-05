module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7843a841d839db2544dddb545846ab82'),
  },
});
