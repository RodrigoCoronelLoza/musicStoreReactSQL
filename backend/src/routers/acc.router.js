import { Router } from "express";
import {
  clarinet_accesories,
  sample_tags_clar,
  saxophone_accesories,
  sample_tags_sax,
} from "../data.js";

const router = Router();

router.get("/", (req, res) => {
  //   res.send(clarinet_accesories);
});

// router.get("/slides", (req, res) => {
//   res.send(imageSlide);
// });

router.get("/clarinet", (req, res) => {
  res.send(clarinet_accesories);
});

router.get("/clarinet/tags", (req, res) => {
  res.send(sample_tags_clar);
});

router.get("/clarinet/search/:searchTerm", (req, res) => {
  const { searchTerm } = req.params;
  const clar_found = clarinet_accesories.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(clar_found);
});

router.get("/clarinet/tag/:tag", (req, res) => {
  const { tag } = req.params;
  const tag_found = clarinet_accesories.filter((item) =>
    item.tags?.includes(tag)
  );
  res.send(tag_found);
});

router.get("/clarinet/:clarId", (req, res) => {
  const { clarId } = req.params;
  const id_clar_found = clarinet_accesories.find((item) => item.id === clarId);
  res.send(id_clar_found);
});

router.get("/saxophone", (req, res) => {
  res.send(saxophone_accesories);
});

router.get("/saxophone/tags", (req, res) => {
  res.send(sample_tags_sax);
});

router.get("/saxophone/search/:searchTerm", (req, res) => {
  const { searchTerm } = req.params;
  const sax_found = saxophone_accesories.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(sax_found);
});

router.get("/saxophone/tag/:tag", (req, res) => {
  const { tag } = req.params;
  const tag_found = saxophone_accesories.filter((item) =>
    item.tags?.includes(tag)
  );
  res.send(tag_found);
});

router.get("/saxophone/:saxId", (req, res) => {
  const { saxId } = req.params;
  const id_sax_found = saxophone_accesories.find((item) => item.id === saxId);
  res.send(id_sax_found);
});

export default router;
