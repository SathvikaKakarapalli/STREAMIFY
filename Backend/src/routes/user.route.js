import express from "express";
const router = express.Router();
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  acceptFriendRequest,
  getFreindRequests,
  getMyFriends,
  getOutgoingFriendReqs,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/user.controller.js";

router.get("/recommendedUsers", protectRoute, getRecommendedUsers);
router.get("/friends", protectRoute, getMyFriends);
router.post("/friend-request/:id", protectRoute, sendFriendRequest);
router.put("/friend-request/:id/accept", protectRoute, acceptFriendRequest);
router.get("/friend-requests", protectRoute, getFreindRequests);
router.get("/outgoing-friend-requests", protectRoute, getOutgoingFriendReqs);

export default router;
