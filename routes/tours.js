import  express  from "express";
import { createTour,updateTour,getSingleTour,getAllTour,deleteTour,getTourBySearch,getFeaturedTour ,getTourCount} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router= express.Router()

// create new tour
router.post('/',verifyAdmin,createTour)

// update new tour
router.put('/:id',verifyAdmin,updateTour)

// delete a tour
router.delete('/:id',verifyAdmin,deleteTour)

// get single tour
router.get('/:id',getSingleTour)

// get all tours
router.get('/',getAllTour)

// get tours by search
router.get('/search/getTourBySearch',getTourBySearch);

// get  featured tours 
router.get('/search/getFeaturedTours',getFeaturedTour);

// get   tours count 
router.get('/search/getTourCount',getTourCount);

export default router;