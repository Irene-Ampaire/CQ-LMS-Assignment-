// Controller function to handle registration
router.post('/register', upload.single('attachment'), 
async (req, res) => {
    try {
        const { name, email, password, mobileNumber, gender, language, termsAccepted } = req.body;
        const attachment = req.file ? req.file.path : null;

        // Create a new user
        const newUser = new User({
            name,
            email,
            password,
            mobileNumber,
            gender,
            language,
            attachment,
            termsAccepted: termsAccepted === 'on'
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;