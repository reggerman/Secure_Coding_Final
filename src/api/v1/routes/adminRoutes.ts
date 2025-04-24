import express from "express";
import { setCustomClaims } from "../controllers/adminController";
import authenticate from "../middleware/authentication";
import isAuthorized from "../middleware/authorization";

const router: express.Router = express.Router();
// "CustomClaims endpoint"
/**
 * @openapi
 * /api/v1/admin/setCustomClaims:
 *   post:
 *     summary: Set custom claims for a user
 *     description: This endpoint allows an admin to set custom claims for a user.
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               uid:
 *                 type: string
 *                 description: The user ID to set custom claims for.
 *                 example: "user123"
 *               claims:
 *                 type: object
 *                 description: The custom claims to set for the user.
 *                 example: { "admin": true }
 *     responses:
 *       '200':
 *         description: Custom claims set successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Custom claims set successfully."
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       '403':
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Forbidden"
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */
router.post(
    "/setCustomClaims",
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    setCustomClaims
);

export default router;