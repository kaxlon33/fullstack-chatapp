import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, sendMessage, getUsersForSidebar } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users",protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, async (req, res, next) => { const limit = parseInt(req.query.limit, 10) || 50; const offset = parseInt(req.query.offset, 10) || 0; req.query.limit = limit; req.query.offset = offset; return getMessages(req, res, next); });

router.post("/send/:id" , protectRoute , sendMessage)


export default router;