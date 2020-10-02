module.exports = {

    generateAccessToken: function(req, res) {
        res.json(
            {
                status : "Ok",
                message : "Access token generado para user-id" + req.body.userId,
                data : {
                    "access-token" : require('crypto').randomBytes(64).toString('hex')
                }
            }
        );
    }

}