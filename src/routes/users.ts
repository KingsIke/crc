import express from "express";
const router = express.Router();
import {
  BasicPremiumReport,
  BasicStandardReport,
  ClassicStandardReport,
  CompactPremiumReport,
  MicroStandardReport,
  NanoStandardReport,
} from "../controllers/users";
router.post("/premium_report", BasicPremiumReport);
router.post("/standard_report", BasicStandardReport);
router.post("/classic_standard_report", ClassicStandardReport);
router.post("/compact_premium_report", CompactPremiumReport);
router.post("/micro_standard_report", MicroStandardReport);
router.post("/nano_standard_report", NanoStandardReport);

export default router;