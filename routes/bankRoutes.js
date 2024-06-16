const express = require('express');
const Bank = require('../models/bank');

const router = express.Router();

//Get all the banks name
router.get('/', async (req, res) => {
    try {
        const banks = await Bank.find().distinct('bank_name');
        res.json(banks);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
});

//Get all the information for a specific bank for example SBI
router.get('/:bankName',async(req,res)=>{
    try {
        const allbanks = await Bank.find({bank_name: req.params.bankName});
        res.json(allbanks)
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }
})

//Takes bankname and branchname as params and return the corresponding value
router.get('/:bankName/:branchName', async (req, res) => {
    try {
        const branch = await Bank.find({
            bank_name: req.params.bankName,
            branch: req.params.branchName
        });
        if (!branch) {
            return res.status(404).json({ message: 'Branch not found' });
        }
        res.json(branch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;