INSERT into Games  (id, name, descr, pic, createdAt, updatedAt)
VALUES  (
    "1",
    "Street Fighter 2",
    "The World Warrior",
    "https://www.fightersgeneration.com/games/sf2-fly.jpg",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59'
),
 ("2",
    "Tekken 7",
    "3D Mishima",
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/220px-Official_Tekken_7_Logo.jpg",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59'
),
 ("3",
    "Dragon Ball Fighter Z",
    "Cell's Revenge",
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/DBFZ_cover_art.jpg/220px-DBFZ_cover_art.jpg",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59'
),
 ("4",
    "Super Smash Bros Ultimate",
    "Now with more Min Min",
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59'
);

INSERT into Characters  (characterName, charURL, charType, createdAt, updatedAt, GameId)
VALUES (
"Ryu (SF2)",
"https://vignette.wikia.nocookie.net/streetfighter/images/7/72/Sf-ryuold.gif/revision/latest?cb=20080211020008",
"Shotoclone",'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
 (
"E. Honda (SF2)",
"https://vignette.wikia.nocookie.net/streetfighter/images/f/f1/EHonda_breathe.gif/revision/latest?cb=20080212074417"
,"Defensive?",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
), (
"Blanka (SF2)",
"https://vignette.wikia.nocookie.net/streetfighter/images/1/15/Sf-blankaold.gif/revision/latest?cb=20080209060758"
,"Uh..",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
 (
"Guile (SF2)",
"https://vignette.wikia.nocookie.net/streetfighter/images/5/5c/Guile-oldstance.gif/revision/latest?cb=20080209192854"
,"Defensive/Zoner",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
 (
"Ken (SF2)",
"https://vignette.wikia.nocookie.net/streetfighter/images/6/6b/Ken_breathe.gif/revision/latest?cb=20080212074601"
,"Shotoclone",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
 (
"Chun-li (SF2)",
"https://vignette.wikia.nocookie.net/streetfighter/images/9/93/ChunLi_breathe.gif/revision/latest?cb=20080212074238"
,"Rushdown",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
 (
"Zangief (SF2)",
"https://vignette.wikia.nocookie.net/streetfighter/images/0/07/Zangief-sf2-s1.gif/revision/latest?cb=20080211044340"
,"Grappler",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
),
 (
"Dhalsim (SF2)",
"https://vignette.wikia.nocookie.net/streetfighter/images/c/c6/Classic-dhalsim.gif/revision/latest?cb=20080209063752"
,
"Zoner",
'9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "1"
   
),
 -- Smash Characters:
 (
    "Mario (SSBU)",
    "https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/250px-Mario_SSBU.png",
    "All-Rounder",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Donkey Kong (SSBU)",
    "https://www.ssbwiki.com/images/thumb/c/c9/Donkey_Kong_SSBU.png/250px-Donkey_Kong_SSBU.png",
    "Half-Grappler",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Link (SSBU)",
    "https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/250px-Link_SSBU.png",
    "Turtle",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Samus (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/250px-Samus_SSBU.png",
    "Turtle",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Yoshi (SSBU)",
    "https://www.ssbwiki.com/images/thumb/8/8d/Yoshi_SSBU.png/250px-Yoshi_SSBU.png",
    "All-Rounder/Rushdown",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Kirby (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/250px-Kirby_SSBU.png",
    "Hit and Run",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Fox (SSBU)",
    "https://www.ssbwiki.com/images/thumb/2/2f/Fox_SSBU.png/250px-Fox_SSBU.png",
    "Rushdown/Space Animal",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Pikachu (SSBU)",
    "https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/250px-Pikachu_SSBU.png",
    "Zone-Breaker",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Luigi (SSBU)",
    "https://www.ssbwiki.com/images/thumb/b/bb/Luigi_SSBU.png/250px-Luigi_SSBU.png",
    "Half-Grappler",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Ness (SSBU)",
    "https://www.ssbwiki.com/images/thumb/8/82/Ness_SSBU.png/250px-Ness_SSBU.png",
    "All-Rounder",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Captain Falcon (SSBU)",
    "https://www.ssbwiki.com/images/thumb/d/da/Captain_Falcon_SSBU.png/250px-Captain_Falcon_SSBU.png",
    "Mix-Up",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Jigglypuff (SSBU)",
    "https://www.ssbwiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/250px-Jigglypuff_SSBU.png",
    "Hit and Run",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Peach (SSBU)",
    "https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/250px-Peach_SSBU.png",
    "All-Rounder",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),

 (
    "Bowser (SSBU)",
    "https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/250px-Bowser_SSBU.png",
    "Bait and Punish",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Ice Climbers (SSBU)",
    "https://www.ssbwiki.com/images/thumb/1/12/Ice_Climbers_SSBU.png/250px-Ice_Climbers_SSBU.png",
    "Half-Grappler",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Sheik (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/00/Sheik_SSBU.png/250px-Sheik_SSBU.png",
    "Zone-Breaker",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Zelda (SSBU)",
    "https://www.ssbwiki.com/images/thumb/c/c8/Zelda_SSBU.png/250px-Zelda_SSBU.png",
    "Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Dr.Mario (SSBU)",
    "https://www.ssbwiki.com/images/thumb/3/3f/Dr._Mario_SSBU.png/250px-Dr._Mario_SSBU.png",
    "ALl-Rounder",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Pichu (SSBU)",
    "https://www.ssbwiki.com/images/thumb/c/c1/Pichu_SSBU.png/250px-Pichu_SSBU.png",
    "Rushdown",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Falco (SSBU)",
    "https://www.ssbwiki.com/images/thumb/8/80/Falco_SSBU.png/250px-Falco_SSBU.png",
    "Mix-Up/Space Animal",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Marth (SSBU)",
    "https://www.ssbwiki.com/images/thumb/e/e9/Marth_SSBU.png/250px-Marth_SSBU.png",
    "Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Young Link (SSBU)",
    "https://www.ssbwiki.com/images/thumb/8/8a/Young_Link_SSBU.png/250px-Young_Link_SSBU.png",
    "Turtle",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Ganondorf (SSBU)",
    "https://www.ssbwiki.com/images/thumb/9/91/Ganondorf_SSBU.png/250px-Ganondorf_SSBU.png",
    "Bait and Punish",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),

 (
    "Mewtwo (SSBU)",
    "https://www.ssbwiki.com/images/thumb/d/de/Mewtwo_SSBU.png/250px-Mewtwo_SSBU.png",
    "Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Roy (SSBU)",
    "https://www.ssbwiki.com/images/thumb/9/9d/Roy_SSBU.png/250px-Roy_SSBU.png",
    "Footsies",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Mr Game. and Watch (SSBU)",
    "https://www.ssbwiki.com/images/thumb/c/cb/Mr._Game_%26_Watch_SSBU.png/250px-Mr._Game_%26_Watch_SSBU.png",
    "Mix-Up",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Meta Knight (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/00/Meta_Knight_SSBU.png/250px-Meta_Knight_SSBU.png",
    "Footsies",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Pit (SSBU)",
    "https://www.ssbwiki.com/images/thumb/3/38/Pit_SSBU.png/250px-Pit_SSBU.png",
    "All-Rounder",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Zero Suit Samus (SSBU)",
    "https://www.ssbwiki.com/images/thumb/f/f0/Zero_Suit_Samus_SSBU.png/250px-Zero_Suit_Samus_SSBU.png",
    "Zone-Breaker",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Wario (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/04/Wario_SSBU.png/250px-Wario_SSBU.png",
    "Hit and Run",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Snake (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/02/Snake_SSBU.png/250px-Snake_SSBU.png",
    "Trapper",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Ike (SSBU)",
    "https://www.ssbwiki.com/images/thumb/8/86/Ike_SSBU.png/250px-Ike_SSBU.png",
    "Balanced/Bait and Punish",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Pokemon Trainer (SSBU)",
    "https://www.ssbwiki.com/images/thumb/2/28/Pok%C3%A9mon_Trainer_%28solo%29_SSBU.png/300px-Pok%C3%A9mon_Trainer_%28solo%29_SSBU.png",
    "Versatile",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Squirtle (SSBU)",
    "https://www.ssbwiki.com/images/thumb/7/79/Squirtle_SSBU.png/250px-Squirtle_SSBU.png",
    "Mix-Up",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Ivysaur (SSBU)",
    "https://www.ssbwiki.com/images/thumb/5/52/Ivysaur_SSBU.png/250px-Ivysaur_SSBU.png",
    "All-Rounder",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Charizard (SSBU)",
    "https://www.ssbwiki.com/images/thumb/2/21/Charizard_SSBU.png/250px-Charizard_SSBU.png",
    "Bait and Punish",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Diddy Kong (SSBU)",
    "https://www.ssbwiki.com/images/thumb/a/a7/Diddy_Kong_SSBU.png/250px-Diddy_Kong_SSBU.png",
    "Footsies/Balanced",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Lucas (SSBU)",
    "https://www.ssbwiki.com/images/thumb/8/81/Lucas_SSBU.png/250px-Lucas_SSBU.png",
    "Mix-Up",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Sonic (SSBU)",
    "https://www.ssbwiki.com/images/thumb/b/ba/Sonic_SSBU.png/254px-Sonic_SSBU.png",
    "Hit and Run",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "King DeDeDe (SSBU)",
    "https://www.ssbwiki.com/images/thumb/f/f5/King_Dedede_SSBU.png/250px-King_Dedede_SSBU.png",
    "Bait-and-Punish/Half-Grappler",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Olimar (SSBU)",
    "https://www.ssbwiki.com/images/thumb/b/b3/Olimar_SSBU.png/250px-Olimar_SSBU.png",
    "Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Lucario (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/08/Lucario_SSBU.png/250px-Lucario_SSBU.png",
    "Balanced",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "R.O.B (SSBU)",
    "https://www.ssbwiki.com/images/thumb/6/60/R.O.B._SSBU.png/250px-R.O.B._SSBU.png",
    "Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Toon Link (SSBU)",
    "https://www.ssbwiki.com/images/thumb/5/56/Toon_Link_SSBU.png/250px-Toon_Link_SSBU.png",
    "Trapper",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Wolf (SSBU)",
    "https://www.ssbwiki.com/images/thumb/8/8a/Wolf_SSBU.png/250px-Wolf_SSBU.png",
    "Mix-Up",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Villager (SSBU)",
    "https://www.ssbwiki.com/images/thumb/a/ac/Villager_SSBU.png/240px-Villager_SSBU.png",
    "Trapper",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Mega Man (SSBU)",
    "https://www.ssbwiki.com/images/thumb/4/46/Mega_Man_SSBU.png/250px-Mega_Man_SSBU.png",
    "Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Wii Fit Trainer (SSBU)",
    "https://www.ssbwiki.com/images/thumb/f/ff/Wii_Fit_Trainer_SSBU.png/250px-Wii_Fit_Trainer_SSBU.png",
    "Hit and Run",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Rosalina and Luma (SSBU)",
    "https://www.ssbwiki.com/images/thumb/1/16/Rosalina_%26_Luma_SSBU.png/250px-Rosalina_%26_Luma_SSBU.png",
    "All-Rounder",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Little Mac (SSBU)",
    "https://www.ssbwiki.com/images/thumb/5/53/Little_Mac_SSBU.png/250px-Little_Mac_SSBU.png",
    "Footsies",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Greninja (SSBU)",
    "https://www.ssbwiki.com/images/thumb/d/da/Greninja_SSBU.png/250px-Greninja_SSBU.png",
    "Hit-and-Run",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Palutena (SSBU)",
    "https://www.ssbwiki.com/images/thumb/6/6b/Palutena_SSBU.png/250px-Palutena_SSBU.png",
    "Hit and Run/Balanced",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Pac-Man (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/03/Pac-Man_SSBU.png/250px-Pac-Man_SSBU.png",
    "Trapper",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Robin (SSBU)",
    "https://www.ssbwiki.com/images/thumb/8/82/Robin_SSBU.png/250px-Robin_SSBU.png",
    "Trapper",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Shulk (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/0f/Shulk_SSBU.png/250px-Shulk_SSBU.png",
    "Versatile (Depends on Monado Art selected)",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Bowser Jr (SSBU)",
    "https://www.ssbwiki.com/images/thumb/2/2b/Bowser_Jr._SSBU.png/270px-Bowser_Jr._SSBU.png",
    "Bait and Punish/Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Duck Hunt (SSBU)",
    "https://www.ssbwiki.com/images/thumb/d/d8/Duck_Hunt_SSBU.png/250px-Duck_Hunt_SSBU.png",
    "Turtle",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Ryu (SSBU)",
    "https://www.ssbwiki.com/images/thumb/6/61/Ryu_SSBU.png/250px-Ryu_SSBU.png",
    "Footsies",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Cloud (SSBU)",
    "https://www.ssbwiki.com/images/thumb/b/b3/Cloud_SSBU.png/250px-Cloud_SSBU.png",
    "Balanced",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Corrin (SSBU)",
    "https://www.ssbwiki.com/images/thumb/c/c4/Corrin_SSBU.png/250px-Corrin_SSBU.png",
    "Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Bayonetta (SSBU)",
    "https://www.ssbwiki.com/images/thumb/7/7c/Bayonetta_SSBU.png/240px-Bayonetta_SSBU.png",
    "Balanced/Hit-and-Run",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Inkling (SSBU)",
    "https://www.ssbwiki.com/images/thumb/2/2e/Inkling_SSBU.png/242px-Inkling_SSBU.png",
    "Hit and Run",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Ridley (SSBU)",
    "https://www.ssbwiki.com/images/thumb/2/27/Ridley_SSBU.png/250px-Ridley_SSBU.png",
    "Half-Grappler",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Simon (SSBU)",
    "https://www.ssbwiki.com/images/thumb/9/95/Simon_SSBU.png/250px-Simon_SSBU.png",
    "Trapper",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "King K. Rool (SSBU)",
    "https://www.ssbwiki.com/images/thumb/b/b6/King_K._Rool_SSBU.png/250px-King_K._Rool_SSBU.png",
    "Zoner/Bait and Punish",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Isabelle (SSBU)",
    "https://www.ssbwiki.com/images/thumb/2/2b/Isabelle_SSBU.png/240px-Isabelle_SSBU.png",
    "Trapper",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Incineroar (SSBU)",
    "https://www.ssbwiki.com/images/thumb/c/c4/Incineroar_SSBU.png/250px-Incineroar_SSBU.png",
    "Half-Grappler",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Pirahna Plant (SSBU)",
    "https://www.ssbwiki.com/images/thumb/f/f0/Piranha_Plant_SSBU.png/250px-Piranha_Plant_SSBU.png",
    "TBA",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Joker (SSBU)",
    "https://www.ssbwiki.com/images/thumb/5/5c/Joker_SSBU.png/250px-Joker_SSBU.png",
    "Hit and Run",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Hero (SSBU)",
    "https://www.ssbwiki.com/images/thumb/0/07/Hero_SSBU.png/250px-Hero_SSBU.png",
    "Half-Grappler",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
),
 (
    "Banjo and Kazooie (SSBU)",
    "https://www.ssbwiki.com/images/thumb/9/97/Banjo_%26_Kazooie_SSBU.png/250px-Banjo_%26_Kazooie_SSBU.png",
    "Balanced",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
), (
    "Terry (SSBU)",
    "https://www.ssbwiki.com/images/thumb/f/f5/Terry_SSBU.png/250px-Terry_SSBU.png",
    "Footsies",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
), (
    "Byleth (SSBU)",
    "https://www.ssbwiki.com/images/thumb/3/3d/Byleth_SSBU.png/250px-Byleth_SSBU.png",
    "Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
), (
    "Min Min (SSBU)",
    "https://www.ssbwiki.com/images/thumb/3/35/Min_Min_SSBU.png/250px-Min_Min_SSBU.png",
    "Zoner",
    '9999-12-31 23:59:59',
    '9999-12-31 23:59:59',
    "4"
)