//Using Try-Catch block
// const asyncHandler = (fn) => {
//   async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

//Using Promises

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export {asyncHandler};