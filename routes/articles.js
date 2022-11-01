const express =require('express')
const Article = require('./../models/article')

const router = express.Router()

router.get('/new', (req, res)=>{
    res.render('articles/new')
})

router.get('/":id',(req, res) => {

})

router.post('/', async (req, res)=>{
const article = new Article({
    title: require.body.title,
    description: require.body.description,
    markdown: require.body.markdown

})
try{
    article = await article.save()
    res.redirect(`/articles/${article.id}`)
}
catch(err){
    res.render('article/new', {article:article})
}

})

module.exports = router