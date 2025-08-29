import { Router } from "express";
import { PlaceController } from "../controllers/PlaceController";

const router = Router();
const placeController = new PlaceController();

router.get('/places', placeController.getAllPlaces);

router.get('/places/:place_id', placeController.getPlaceById);

export {
    router as placesRoutes
};