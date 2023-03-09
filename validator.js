import Joi from 'joi';

export const verficationSchema = Joi.object({
    hostName: Joi.string().required(),
    hostEmail: Joi.string().email().required()
});

export const emailSchema = Joi.object({
    hostName: Joi.string().required(),
    hostEmail: Joi.string().email().required(),
    hostPin: Joi.string().required(),
    partyDate: Joi.string().required(),
    partyTime: Joi.string().required(),
    partyLocation: Joi.string().required(),
    noteFromHost: Joi.string().required(),
    game: Joi.number().required(),
    selectedGame: Joi.array().items(Joi.object({
        _id: Joi.string().required(),
        id: Joi.number().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        link: Joi.string().required(),
        image: Joi.string().required(),
        characters: Joi.array().items(Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            costumeSuggestion: Joi.string().required(),
            player: Joi.object({
                name: Joi.string().allow('').optional(),
                email: Joi.string().email().allow('').optional(),
            })
        }))        
    }))
  });
        

