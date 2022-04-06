import Joi from "joi";

// function that returns error if validation fails.
export function validateQuery(searchQuery) {
  const IpUrlSchmea = Joi.object({
    searchQuery: [
      Joi.string().uri().allow(""),
      Joi.string().ip().allow(""),
      Joi.string().hostname().allow(""),
    ],
  });

  const queryError = IpUrlSchmea.validate({searchQuery});

  return queryError;
}

export default validateQuery;
