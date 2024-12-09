const express = require('express');
const animesArr = require("../data/animes")
const animes = express.Router();
const {
    getAllAnimes,
    getOneAnime,
    createOneAnime,
    updateOneAnime,
    deleteOneAnime,
} = require('../queries/animes');

animes.get("/", async (req, res) => {
    try {
        const animes = await getAllAnimes()
        res.status(200).json({ payload: animes })
    } catch (error) {
        res.status(404).json({ payload: error })
    }
});
animes.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const anime = await getOneAnime(id);
        res.status(200).json({ payload: anime })
    } catch (error) {
        res.status(404).json({ payload: error })
    }
});
animes.post("/", async (req, res) => {
    try {
        const anime = req.body;
        const newAnime = await createOneAnime(anime)
        res.status(201).json({ payload: newAnime })
    } catch (error) {
        res.status(404).json({ payload: error })
    }
});

animes.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const anime = req.body;
        const updatedAnime = await updateOneAnime(id, anime);
        res.status(200).json({ payload: updatedAnime })
    } catch (error) {
        res.status(404).json({ payload: error })
    }
})

animes.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAnime = await deleteOneAnime(id);
        res.status(200).json({ payload: animes })
    } catch (error) {
        res.status(404).json({ payload: error })
    }
})

// animes.get("/animes", (req, res) => {
//     console.log(animesArr)
//     res.status(200).json(animesArr);
// })

// animes.get("/:id", (req, res) => {
//     try {
//         console.log(req.params)
//         const id = req.params.id; //const {id} = req.params
//         const anime = animesArr.find((anime) => anime.id === Number(id));
//         if (anime) {
//             res.status(200).json(anime)
//         } else {
//             throw "anime could not be found";
//         }
//     } catch (error) {
//         res.status(404).json({ error: error })
//     }

//     animes.post("/animes", (req, res) => {
//         try {
//             const anime = req.body;
//             anime.id = animesArr.length + 1;
//             if (anime.name && anime.description) {
//                 animesArr.push(anime)
//                 res.status(201).json(animesArr[animesArr.length - 1]);
//             }
//         } catch (error) {
//             res.status(400).json({ error: error })
//         }
//     })

//     animes.delete("/:id", (req, res) => {
//         try {
//             const { id } = req.params;
//             const index = animesArr.findIndex((anime) => anime.id === Number(id)); //find index will return the index or -1 if not found

//             if (index !== -1) {
//                 //If the index is found 
//                 animesArr.splice(index, 1); //removing the anime
//                 res.status(200).json(animesArr); //responding with the updated array
//             } else {
//                 //otherwise trigger an error
//                 throw "Could not find Anime";
//             }
//         } catch (error) {
//             res.status(400).json({ error: error })
//         }
//     })

//     animes.put("/:id", (req, res) => {
//         try {
//             const { id } = req.params;
//             const anime = req.body;
//             const index = animesArr.findIndex((anime) => Number(id) === anime.id)
//             if (index !== -1) {
//                 animesArr.splice(index, 1, anime);
//                 res.status(201).json(animesArr);
//             } else {
//                 throw "Could not update anime";
//             }
//         } catch (error) {
//             res.status(400).json({ error: error });
//         }

//     })
// });


module.exports = {
    getAllAnimes,
    getOneAnime,
    createOneAnime
}