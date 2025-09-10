import { Router } from "express";

const subscriptionRouter = Router();

// GET /subscriptions => get all subscriptions
// GET /subscriptions/:id => get subscription by id
// POST /subscriptions => create a new subscription
// PUT /subscriptions/:id => update subscription by id
// DELETE /subscriptions/:id => delete subscription by id   


subscriptionRouter.get('/', (req,res)=>{
      res.send({title: 'GET all subscriptions'})
})

subscriptionRouter.get('/:id', (req,res)=>{
      res.send({title: 'GET subscription details'})
})

subscriptionRouter.post('/', (req, res)=>{
      res.send({title: "CREATE Subscription"})
})

subscriptionRouter.put('/:id', (req,res)=>{
      res.send({title: "UPDATE Subscription"})
})

subscriptionRouter.delete('/:id', (req,res)=>{
      res.send({title: "DELETE Subscription"})
})

subscriptionRouter.put('/:id/cancel', (req,res)=>{
      res.send({title: "CANCEL Subscription"})
})

subscriptionRouter.get('/:id/upcoming-renewals', (req,res)=>{
      res.send({title: "GET upcoming renewals"})
})

export default subscriptionRouter;