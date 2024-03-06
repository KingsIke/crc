import Joi from "joi";

export const bvnSchema = Joi.object({
  bvn: Joi.string().required().min(11).max(12)
})



export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
