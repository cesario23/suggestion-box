const express = require ("express");
const router = express.Router ();

const { getAllSuggestions, getSuggestionsById, createSuggestion, updateSuggestion, deleteSuggestionById} = require ("./controller/suggestionController")

router.get ('/', function (req, res, next){
    res.json ({ test: true})
});

router.get ("/get-all-suggestions", getAllSuggestions);

router.get ('/get-suggestions-by-id/:id', getSuggestionsById);

router.post ("/create-suggestion", createSuggestion);

router.put ('/update-suggestion-by-id/:id', updateSuggestion);

router.delete ('/delete-suggestion-by-id/:id', deleteSuggestionById);

module.exports = router;