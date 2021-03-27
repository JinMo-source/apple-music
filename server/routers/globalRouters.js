import express from 'express';
import routes from '../routes';

const router = express.Router();

router.get(routes.home, (req, res) => {
    res.send({greeting: 'home'});
});
router.get(routes.serach,(res,req)=>{
    res.send('serach');
})

module.exports = router;