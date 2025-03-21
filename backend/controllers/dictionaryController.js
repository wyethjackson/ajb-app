const { Op } = require('sequelize');
const { DictionaryTerm } = require('../models');


exports.getAllTerms = async (req, res) => {
    const terms = await DictionaryTerm.findAll();
    res.json(terms);
};

exports.createTerm = async (req, res) => {
    const term = await DictionaryTerm.create(req.body);
    res.status(201).json(term);
};

exports.searchTerms = async (req, res) => {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({ message: 'Query parameter "q" is required.' });
    }

    const terms = await DictionaryTerm.findAll({
        where: {
            [Op.or]: [
                { word_en: { [Op.iLike]: `%${q}%` } },
                { word_sanskrit: { [Op.iLike]: `%${q}%` } },
                { definition: { [Op.iLike]: `%${q}%` } },
            ],
        },
    });

    res.json(terms);
};