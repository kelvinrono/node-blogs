const express=require('express');
const mongoose=require('mongoose');
const app=express()
const articleRouter=require('./routes/articles')

// mongoose.connect('mongodb://localhost/blog')

const mongoDB = "mongodb://127.0.0.1/blog";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });


app.set('view engine', 'ejs')



app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {

    const articles=[
        {
        title: 'Test article 1',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }
]

    res.render('articles/index', { articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)

