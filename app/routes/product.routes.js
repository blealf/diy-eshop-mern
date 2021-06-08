module.exports = app => {
  const products = require("../controllers/product.controller");
  require('dotenv/config');
  const multer = require('multer');
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cd(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  const upload = multer({ storage: storage }).array('photos', 10);

  const router = require("express").Router();

  router.post("/", upload, products.create);

  router.get("/", products.findAll);

  router.get("/published", products.findAllPublished);

  router.get("/:id", products.findOne);

  router.put("/:id", products.update);

  router.delete("/:id", products.delete);

  router.delete("/", products.deleteAll);

  app.use('/api/products', router);
  app.use(upload);
}