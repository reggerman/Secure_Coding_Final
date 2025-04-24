import express, {Router} from "express";
import * as buff from "../controllers/buffControllers";
import authenticate from "../middleware/authentication";
import isAuthorized from "../middleware/authorization";

const router: Router = express.Router();

// Get: This will return all the buffs added
router.get("/buffs", authenticate, isAuthorized({ hasRole: ["admin", "manager", "officer"] }), buff.getAllBuffs);

// Post: This will allow you to create a new category of buffs added
router.post("/buffs", authenticate, isAuthorized({ hasRole: ["admin"] }), buff.createBuffCategory);

// Put: This will allow you to update a new category of buffs added
router.put("/buffs", authenticate, isAuthorized({ hasRole: ["admin"] }), buff.updateBuffCategory);

// Delete: This will allow you to delete an entire category of buffs added
router.delete("/buffs", authenticate, isAuthorized({ hasRole: ["admin"] }), buff.deleteBuffCategory);

// Get/{Category}: This will return all the buffs of a certain category
router.get("/buffs/:category", authenticate, isAuthorized({ hasRole: ["admin", "manager", "officer"] }), buff.getBuffsByCategory);

// Get/{Category}/{id/name}: This will return the corresponding buff
router.get("/buffs/:category/:id", authenticate, isAuthorized({ hasRole: ["admin", "manager", "officer"] }), buff.getBuffByIdOrName);

// Put/{Category}/{id/name}: This will allow you to add a buff to a category
router.put("/buffs/:category/:id", authenticate, isAuthorized({ hasRole: ["admin"] }), buff.addBuffToCategory);

// Post/{Category}/{id/name}: This will allow you to update a buff in a category
router.post("/buffs/:category/:id", authenticate, isAuthorized({ hasRole: ["admin"] }), buff.updateBuffInCategory);

// Delete/{Category}/{id/name}: This will allow you to delete a buff
router.delete("/buffs/:category/:id", authenticate, isAuthorized({ hasRole: ["admin"] }), buff.deleteBuff);


export default router; 