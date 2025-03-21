const { sequelize, DictionaryTerm } = require('../models');

const seedTerms = [
    {
        word_en: 'Yoga',
        word_sanskrit: 'योग',
        pronunciation: 'yo-ga',
        definition: 'A spiritual and ascetic discipline, a part of which includes breath control, meditation, and the adoption of specific bodily postures.',
        examples: 'Practicing yoga daily helps improve flexibility.',
        audio_url: '',
        image_url: ''
    },
    {
        word_en: 'Karma',
        word_sanskrit: 'कर्म',
        pronunciation: 'kar-ma',
        definition: 'The sum of a person’s actions, viewed as deciding their fate in future existences.',
        examples: 'He believes helping others is good karma.',
        audio_url: '',
        image_url: ''
    }
];

async function seedDatabase() {
    await sequelize.sync({ force: true });
    await DictionaryTerm.bulkCreate(seedTerms);
    console.log('Seed data successfully added!');
    process.exit();
}

seedDatabase().catch(err => {
    console.error('Failed to seed data:', err);
    process.exit(1);
});
