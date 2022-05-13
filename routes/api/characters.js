const router = require("express").Router();

const { Character } = require("../../db");

router.get("/", async (req, res) => {
  const characters = await Character.findAll({
    attributes: ["imagen", "nombre"],
  });
  res.json(characters);
  //res.send('Entra correctamente a Characters');
});

router.post("/", async (req, res) => {
  const character = await Character.create(req.body);
  res.json(character);
});

router.put("/:characterId", async (req, res) => {
  await Character.update(req.body, {
    where: { id: req.params.characterId },
  });
  res.json({ success: "Personaje actualizado" });
});

router.get("/:characterId", async (req, res) => {
  const character = await Character.findOne({
    where: { id: req.params.characterId },
    attributes: ["imagen", "nombre", "edad", "peso", "historia"],
  });
  res.json(character);
});

router.delete("/:characterId", async (req, res) => {
  await Movie.destroy({
    where: {
      id: req.params.characterId,
    },
  });
  res.json({ success: "Se ha eliminado el personaje" });
});
module.exports = router;
