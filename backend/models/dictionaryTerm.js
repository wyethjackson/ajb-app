module.exports = (sequelize, DataTypes) => {
    const DictionaryTerm = sequelize.define('DictionaryTerm', {
        word_en: { type: DataTypes.STRING, allowNull: false },
        word_sanskrit: DataTypes.STRING,
        pronunciation: DataTypes.STRING,
        definition: { type: DataTypes.TEXT, allowNull: false },
        examples: DataTypes.TEXT,
        audio_url: DataTypes.STRING,
        image_url: DataTypes.STRING
    });
    return DictionaryTerm;
};
