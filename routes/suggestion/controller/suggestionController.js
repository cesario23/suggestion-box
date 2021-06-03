const Suggestion = require ('../model/Suggestion');

async function getAllSuggestions (req,res) {
    try {
        let foundAllSuggestions = await Suggestion.find ({});
    res.json ({ message: "Success", data: foundAllSuggestions});
    } catch (e){
        res.status(500).json ({message: "failure", error: e.message})
    }
};

async function getSuggestionsById (req, res){
    const id = req.params.id;
    try {
        let foundById = await Suggestion.findById ({_id: id});
        res.json ({message: "Success", payload: foundById});
    } catch (e){
        res.status(500).json ({message:"failure", error: e.message});
    }
};

async function createSuggestion (req, res){
    try{
        let savedSuggestion = new Suggestion ({
            title : req.body.title,
            author: req.body.author,
            suggestion: req.body.suggestion,
            likes: req.body.likes,
            anonymous: req.body.anonymous,
            timeCreated: req.body.timeCreated

        })
        let createdSuggestion = await savedSuggestion.save();
        res.json ({message: "Success", data: createdSuggestion})
    } catch (e){
        res.status(500).json ({message: "failure", error: e.message})
    }
};

async function updateSuggestion (req, res){
    const id = req.params.id;
    try{
        let updatedSuggestion = await Suggestion.findByIdAndUpdate ({_id:id}, req.body.author, req.body.suggestion, {new:true});
        res.json ({message:"Success", data: updatedSuggestion})
    }catch (e){
        res.status(500).json ({message:"failure", error: e.message})
    }
};

async function deleteSuggestionById (req, res){
    let id = req.param.id;
    try{
        let deletedById = await Suggestion.findByIdAndRemove ({_id:id});
        res.json ({message: "Success", data: deletedById})
    }catch (e){
        res.status(500).json ({message: "failure", error: e.message})
    }
};

module.exports ={
    getAllSuggestions,
    getSuggestionsById,
    createSuggestion,
    updateSuggestion,
    deleteSuggestionById,
};
