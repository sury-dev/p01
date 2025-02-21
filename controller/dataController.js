async function postData(req, res){
    try {
        const { data } = req.body;
        
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format" });
        }

        const user_id = "john_doe_17091999";
        const email = "john@xyz.com";
        const roll_number = "ABCD123";

        const numbers = data.filter(item => !isNaN(item));  // Extract numbers
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item)); // Extract single-character alphabets

        // Get highest alphabet (last in A-Z order)
        let highest_alphabet = [];
        if (alphabets.length > 0) {
            const maxAlpha = alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b);
            highest_alphabet.push(maxAlpha);
        }

        res.status(200).json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });

    } catch (error) {
        res.status(500).json({ is_success: false, message: "Internal Server Error" });
    }
}

async function getData(req, res){
    res.status(200).json({ operation_code: 1 });
}

module.exports={
    postData,
    getData,
}