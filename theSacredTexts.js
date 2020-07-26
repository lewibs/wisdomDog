const theSacredTexts = [
'A wise son brings joy to his father, but a foolish son brings grief to his mother.',
'Ill-gotten treasures have no lasting value, but righteousness delivers from death.',
'The Lord does not let the righteous go hungry, but he thwarts the craving of the wicked.',
'Lazy hands make for poverty, but diligent hands bring wealth.',
'He who gathers crops in summer is a prudent son, but he who sleeps during harvest is a disgraceful son.',
'Blessings crown the head of the righteous, but violence overwhelms the mouth of the wicked.',
'The name of the righteous is used in blessings, but the name of the wicked will rot',
'The wise in heart accept commands, but a chattering fool comes to ruin.',
'Whoever walks in integrity walks securely, but whoever takes crooked paths will be found out.',
'Whoever winks maliciously causes grief, and a chattering fool comes to ruin.',
'The mouth of the righteous is a fountain of life, but the mouth of the wicked conceals violence.',
'Hatred stirs up conflict, but love covers over all wrongs.',
'Wisdom is found on the lips of the discerning, but a rod is for the back of one who has no sense.',
'The wise store up knowledge, but the mouth of a fool invites ruin.',
'The wealth of the rich is their fortified city, but poverty is the ruin of the poor.',
'The wages of the righteous is life, but the earnings of the wicked are sin and death.',
'Whoever heeds discipline shows the way to life, but whoever ignores correction leads others astray.',
'Whoever conceals hatred with lying lips and spreads slander is a fool.',
'Sin is not ended by multiplying words, but the prudent hold their tongues.',
'The tongue of the righteous is choice silver, but the heart of the wicked is of little value.',
'The lips of the righteous nourish many, but fools die for lack of sense.',
'The blessing of the Lord brings wealth, without painful toil for it.',
'A fool finds pleasure in wicked schemes, but a person of understanding delights in wisdom.',
'What the wicked dread will overtake them; what the righteous desire will be granted.',
'When the storm has swept by, the wicked are gone, but the righteous stand firm forever.',
'As vinegar to the teeth and smoke to the eyes, so are sluggards to those who send them.',
'The fear of the Lord adds length to life, but the years of the wicked are cut short.',
'The prospect of the righteous is joy, but the hopes of the wicked come to nothing.',
'The way of the Lord is a refuge for the blameless, but it is the ruin of those who do evil.',
'The righteous will never be uprooted, but the wicked will not remain in the land.',
'From the mouth of the righteous comes the fruit of wisdom, but a perverse tongue will be silenced.',
'The lips of the righteous know what finds favor, but the mouth of the wicked only what is perverse.'
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let wisdom = theSacredTexts[getRandomInt(theSacredTexts.length)];