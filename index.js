const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.use(cors())
app.use(express.json())


// username :dbjohnn1
// password:tx6kerv7KsEGK6Nz


const uri =process.env. MONGODB_URL;
// const uri = "mongodb+srv://dbjohnn1:tx6kerv7KsEGK6Nz@cluster0.scnnn8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
        await client.connect();
        const Starterscollection = client.db('reasturent-meanu-card').collection('Starters')
        const maincoursecollection = client.db('reasturent-meanu-card').collection('maincourse')
        const dessertcollection = client.db('reasturent-meanu-card').collection('dessert')
        const drinkcollection = client.db('reasturent-meanu-card').collection('drink')
        const usercollection = client.db('reasturent-meanu-card').collection('user')
        const reviewcollection = client.db('reasturent-meanu-card').collection('review')
        const ordercollection = client.db('reasturent-meanu-card').collection('order')

    
    
////////////////////////////////Starters data mongo thaka naouea\\\\\\\\\\\\
        app.get('/Starters',async(req,res) => {
            const query = {};
            const cursor = Starterscollection.find(query)
            const part = await cursor.toArray();
            res.send(part)
        })
     // //////////Starters data mongo tae daoue \\\\\\\\\\\\\\\
        app.post('/Starters',async(req,res)=>{
            const starters = req.body;
            const result = await Starterscollection.insertOne(starters)
            res.send(result)
          })

      ///////Starters delet\\\\\\\\\\\
      app.delete('/Starters/:id',async(req,res) => {
        const id = req.params.id;
        const query = {_id:new ObjectId(id)}
        const result = await Starterscollection.deleteOne(query)
        res.send(result)
  
      })
        ///////Starters id diyea khojae\\\\\\\\\\\
        app.get('/Starters/:id',async(req,res) => {
          const id = req.params.id;
          const query = {_id:new ObjectId(id)}
          const result = await Starterscollection.findOne(query)
          res.send(result)
    
        })
    //  //////////////Starters update korae\\\\\\\\\\\\\\\\\
        app.put('/Starters/:id',async(req,res) => {
          const id = req.params.id;
          const updateStarters = req.body
          const filter = {_id:new ObjectId(id)}
          const options = { upsert:true}
          const updateDoc = {
            $set: {
              name: updateStarters.name,
              price: updateStarters.price
            }
          };
          const result = await Starterscollection.updateOne(filter,updateDoc,options);
          res.send(result)
        })

/////////////////////////////////maincourse data mongo thaka naouea\\\\\\\\\\\\
        app.get('/maincourse',async(req,res) => {
            const query = {};
            const cursor = maincoursecollection.find(query)
            const part = await cursor.toArray();
            res.send(part)
        })
     // //////////maincourse data mongo tae daoue \\\\\\\\\\\\\\\
        app.post('/maincourse',async(req,res)=>{
            const maincourse = req.body;
            const result = await maincoursecollection.insertOne(maincourse)
            res.send(result)
          })

      ///////maincourse delet\\\\\\\\\\\
      app.delete('/maincourse/:id',async(req,res) => {
        const id = req.params.id;
        const query = {_id:new ObjectId(id)}
        const result = await maincoursecollection.deleteOne(query)
        res.send(result)
  
      })
        ///////maincourse id diyea khojae\\\\\\\\\\\
        app.get('/maincourse/:id',async(req,res) => {
          const id = req.params.id;
          const query = {_id:new ObjectId(id)}
          const result = await maincoursecollection.findOne(query)
          res.send(result)
    
        })
    //  //////////////maincourse update korae\\\\\\\\\\\\\\\\\
        app.put('/maincourse/:id',async(req,res) => {
          const id = req.params.id;
          const updatemaincourse = req.body
          const filter = {_id:new ObjectId(id)}
          const options = { upsert:true}
          const updateDoc = {
            $set: {
              name: updatemaincourse.name,
              price: updatemaincourse.price
            }
          };
          const result = await maincoursecollection.updateOne(filter,updateDoc,options);
          res.send(result)
        })
/////////////////////////////////dessert data mongo thaka naouea\\\\\\\\\\\\
        app.get('/dessert',async(req,res) => {
            const query = {};
            const cursor = dessertcollection.find(query)
            const part = await cursor.toArray();
            res.send(part)
        })
     // //////////dessert data mongo tae daoue \\\\\\\\\\\\\\\
        app.post('/dessert',async(req,res)=>{
            const dessert = req.body;
            const result = await dessertcollection.insertOne(dessert)
            res.send(result)
          })

      ///////dessert delet\\\\\\\\\\\
      app.delete('/dessert/:id',async(req,res) => {
        const id = req.params.id;
        const query = {_id:new ObjectId(id)}
        const result = await dessertcollection.deleteOne(query)
        res.send(result)
  
      })
      ///////dessert id diyea khojae\\\\\\\\\\\
      app.get('/dessert/:id',async(req,res) => {
        const id = req.params.id;
        const query = {_id:new ObjectId(id)}
        const result = await dessertcollection.findOne(query)
        res.send(result)
  
      })
  //  //////////////dessert update korae\\\\\\\\\\\\\\\\\
      app.put('/dessert/:id',async(req,res) => {
        const id = req.params.id;
        const updatedessert = req.body
        const filter = {_id:new ObjectId(id)}
        const options = { upsert:true}
        const updateDoc = {
          $set: {
            name: updatedessert.name,
            price: updatedessert.price
          }
        };
        const result = await dessertcollection.updateOne(filter,updateDoc,options);
        res.send(result)
      })


/////////////////////////////////drink data mongo thaka naouea\\\\\\\\\\\\
        app.get('/drink',async(req,res) => {
            const query = {};
            const cursor = drinkcollection.find(query)
            const part = await cursor.toArray();
            res.send(part)
        })
     // //////////drink data mongo tae daoue \\\\\\\\\\\\\\\
        app.post('/drink',async(req,res)=>{
            const dessert = req.body;
            const result = await drinkcollection.insertOne(dessert)
            res.send(result)
          })

      ///////drink delet\\\\\\\\\\\
      app.delete('/drink/:id',async(req,res) => {
        const id = req.params.id;
        const query = {_id:new ObjectId(id)}
        const result = await drinkcollection.deleteOne(query)
        res.send(result)
  
      })
            ///////drink id diyea khojae\\\\\\\\\\\
            app.get('/drink/:id',async(req,res) => {
              const id = req.params.id;
              const query = {_id:new ObjectId(id)}
              const result = await drinkcollection.findOne(query)
              res.send(result)
        
            })
        //  //////////////drink update korae\\\\\\\\\\\\\\\\\
            app.put('/drink/:id',async(req,res) => {
              const id = req.params.id;
              const updatedrink = req.body
              const filter = {_id:new ObjectId(id)}
              const options = { upsert:true}
              const updateDoc = {
                $set: {
                  name: updatedrink.name,
                  price: updatedrink.price
                }
              };
              const result = await drinkcollection.updateOne(filter,updateDoc,options);
              res.send(result)
            })
  ///////////////////////////////////user Data\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            // //////////user gulie kae load korae\\\\\\\\\\\
            app.get('/users',async(req,res) => {
              const query = {};
              const cursor = usercollection.find(query)
              const users = await cursor.toArray();
              res.send(users)
          })

        // //////////put mane update if exists or insert if does not exist\\\\\\\\
        app.put('/user/:email',async(req,res) => {
        const email = req.params.email;
        const user = req.body;
        const filter = {email: email};
        const options = {upsert : true}
        const updateDoc = {
          $set: user,  
        };
        const result = await usercollection.updateOne(filter,updateDoc,options);
        
        res.send({result })
  
      })
       ///////user delet\\\\\\\\\\\
       app.delete('/users/:id',async(req,res) => {
        const id = req.params.id;
        const query = {_id:new ObjectId(id)}
        const result = await usercollection.deleteOne(query)
        res.send(result)
  
      })
      app.put('/user/admin/:email',async(req,res) => {
        const email = req.params.email;
        const requester = req.params.email;
        
        const requesteraccount = await usercollection.findOne({email:requester})
       
        // if(requesteraccount.role == 'admin'){
          // console.log(requesteraccount)
          
          const filter = {email: email};
          // console.log(filter)
          const updateDoc = {
            $set: {role:'admin'},
          };
          const result = await usercollection.updateOne(filter,updateDoc);
          res.send(result )
      })
          // ////admin chara oi jaigae guli dakhabae naa\\\\\\\\\

    app.get('/admin/:email',async(req,res) => {
      const email = req.params.email;
      // console.log(email)

      const user= await usercollection.findOne({email:email});
      // console.log(user)
      const isAdmin = user.role === 'admin';
      res.send({admin: isAdmin})
    })

    // ///////mongo thaka review data guli naouea\\\\\\\\\
    app.get('/review',async(req,res) => {
      const query = {};
      const cursor = reviewcollection.find(query)
      const part = await cursor.toArray();
      res.send(part)
  })
       // //////////review data mongo tae daoue \\\\\\\\\\\\\\\
       app.post('/review',async(req,res)=>{
        const dessert = req.body;
        const result = await reviewcollection.insertOne(dessert)
        res.send(result)
      })
            ///////review delet\\\\\\\\\\\
            app.delete('/review/:id',async(req,res) => {
              const id = req.params.id;
              const query = {_id:new ObjectId(id)}
              const result = await reviewcollection.deleteOne(query)
              res.send(result)
        
            })

  //////////////////////order\\\\\\\\\\\\
  app.post('/order',async(req,res)=>{
    const starters = req.body;
    const result = await ordercollection.insertOne(starters)
    res.send(result)
  })
      // /////////order Load korae\\\\\\\\
      app.get('/orders',async(req,res) => {
        const email =  req.query.email;
        const query = {email:email}
        const order = await ordercollection.find(query).toArray()
        res.send(order)
    })
    app.get('/orders',async(req,res) => {
      const query = {};
      const cursor = ordercollection.find(query)
      const part = await cursor.toArray();
      res.send(part)
  })
 ///////orders delet\\\\\\\\\\\
    app.delete('/orders/:id',async(req,res) => {
    const id = req.params.id;
    const query = {_id:new ObjectId(id)}
    const result = await ordercollection.deleteOne(query)
    res.send(result)
     })
        
      

  } catch(error) {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})