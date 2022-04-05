import Joi from "joi";

// function that returns error if validation fails.
export function validateQuery(searchQuery) {
  const IpUrlSchmea = Joi.object({
    searchQuery: [Joi.string().uri(), Joi.string().ip(), Joi.string().hostname()],
  });

  const queryError = IpUrlSchmea.validate({searchQuery});

  return queryError;
}

export default validateQuery;
