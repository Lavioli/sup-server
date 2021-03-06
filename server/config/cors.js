/**
 * Created by Matthew on 11/21/16.
 */
const whitelist = ['https://lavioli.github.io'];

module.exports = (req, res, next) => {
    let allowCORS = false;

    if (process.env.NODE_ENV !== 'production') allowCORS = true;
    if (process.env.NODE_ENV === 'production' && whitelist.indexOf(req.headers.origin) !== -1) allowCORS = true;

    if (!allowCORS) return next();

    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    return next();
};