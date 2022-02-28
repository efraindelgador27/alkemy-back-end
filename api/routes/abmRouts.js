const express = require('express');
const { getAllRecord,getLastTenRecord,createRecord,deleteRecord,updateRecord} = require('../../lib/abm_lib ');
const router = express.Router();


router.get('/allrecords/:id',async function(req, res) {
  const id = parseInt(req.params.id, 10);
    const rows=await getAllRecord(id);
    res.json({rows});
  });

  router.get('/lasttensrecords/:id',async function(req, res) {
    const id = parseInt(req.params.id, 10);
    const rows=await getLastTenRecord(id)
    res.json({rows});
  });

  
router.get('/expenses', function(req, res) {
    res.json({registros:"todos los gastos"});
  });


  router.get('/income', function(req, res) {
    res.json({registros:"todos los ingresos"});
  });

router.post('/saveRegister',async (req,res)=>{
    const newAbm= await createRecord(req.body)
    res.json({newAbm})
    
})

router.put('/updaterecord/:id',async (req,res)=>{

  console.log(req.headers)

  const { monto, fecha, categoria, concepto }=req.body;

    const id = req.params.id;

    console.log(`Datos procesados: id: ${id}  monto: ${monto} categoria: ${categoria} concepto: ${concepto} fecha: ${fecha} `)

   await updateRecord(id,{monto,fecha,categoria,concepto});  
   
    res.json({ok:"121"})
    
})

router.delete('/deleteRegister/:id',async (req,res)=>{
   
   const id = req.params.id;
   console.log(id)  
   const recordDeleted=await deleteRecord(id);
   res.json({data:recordDeleted})
  
})

module.exports=router;