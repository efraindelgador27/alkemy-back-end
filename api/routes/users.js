var express = require('express');
var router = express.Router();
const { getAll} = require('../../lib/user_lib');




router.get('/',async (req,res)=>{  
  const TestUSer=  await getAll()
  
  console.log(TestUSer);
  res.json({TestUSer})
})


module.exports = router;

// clearCookies