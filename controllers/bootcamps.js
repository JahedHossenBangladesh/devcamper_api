// @des all bootcamps
// @route GET/api/v1/bootcamps
//@ access public

exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: "show all bootcamps", hello: req.hello });
};
//@des get one data
// @route GET/api/v1/bootcamps/:id
//@access public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id} ` });
};
//@des create single bootcamps
// @route POST/api/vi/bootcamps
//@access private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamps" });
};
//@des update Bootcamp
//@route PUT/api/v1/bootcamps/:id
//@access private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp id ${req.params.id} ` });
};

//@des delete bootcamp
//@route DELETE/api/v1/bootcamps/:id
//@access private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `deleted bootcamp id ${req.params.id} ` });
};
