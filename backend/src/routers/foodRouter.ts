import{Router} from 'express'
import { sample_food, sample_tag } from '../data'
const router = Router()
router.get('', async( req ,res) => {
    res.send(sample_food)
})

router.get('/api/foods/tags/:tag', async (req ,res)=>{
        const tag = req.params.tag
        const foods =sample_food.filter(ele => ele.tags?.includes(tag));
        res.send(foods)
    })
router.get('api//foods/:id' , async (req, res)=>{
    const id = req.params.id ;
    const foodId:number = parseInt(id)
    const food = sample_food.find(ele => ele.id== foodId)!
    res.send(food)
})
router.get('/foods/search/:searchTerm', async (req , res) => {
    const searchWord = req.params.searchTerm
    const filteredFood = sample_food.filter(ele =>ele.name.toLowerCase().includes(searchWord.toLowerCase()))
    res.send(filteredFood)
})
    router.get('/foods/tags',async (req ,res)=>{
        res.send(sample_tag)
        })
    export default router;