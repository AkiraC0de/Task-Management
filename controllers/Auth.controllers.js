const User = require('../models/User');

const signUp = async (req, res) => {
    try {
        // Verify if the request body has content
        if(!req.body) return res.status(400).json({success: false, message: 'the request has no content'});

        // Verify the datas if complete
        const { name, email, password, profileImage } = req.body;
        if(!email || !password || !name) return res.status(400).json({success: false, message: 'Missing data'});

        // Validate the email format
        const emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
        if(!emailRegex.test(email)) return res.status(400).json({success: false, message: `Invalid email format: ${email}`});


        // Verify if the email has not been registered
        const isRegistered = await User.findOne({email});
        if(isRegistered) return res.status(400).json({success: false, message: 'The email has already been registred '});

        await User.create({ name, email, password, profileImage });
        res.status(201).json({success: true, message: `The account (${email}) have successfully registerd`});

    } catch (error) {
        res.status(500).json({success: false, message: `Server Error`});
        console.log(error.message)
    }
}

module.exports = {
    signUp
}