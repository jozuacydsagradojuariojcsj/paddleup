

const coachMockData = [
    {
        coachId: "C123",
        name: "Jed Juario",
        stars: 4.9,
        achievement1: "2 years of competetive pickleball experience",
        achievement2: "3x Champion (Centrio, Ayala Picklemall CDO, Kibawe)",
        rate: "350/HR/Person",
        rate2:"250/HR/Person if 4PAX Above",
        email: "juariojedcyrus@gmail.com",
        facebook: "Jed Cyrus Sagrado Juario",
        contact:"09269673682",
    },
     {
        coachId: "C123",
        name: "Joshua Manlangit",
        stars: 4.9,
        achievement1: "2 years of competetive pickleball experience",
        achievement2: "3x Champion (Centrio, Ayala Picklemall CDO, Kibawe)",
        rate: "350/HR/Person",
        rate2:"250/HR/Person if 4PAX Above",
        email: "juariojedcyrus@gmail.com",
        facebook: "Jed Cyrus Sagrado Juario",
        contact:"09269673682",
    },
]

const getCoachController = async (req, res) => {
    try{
        const coach = coachMockData;
        res.status(200).json(coach)
        return;
    }catch (e) {
        res.status(500).json({error:`Failed to retrieve posts: ${e}`});
        return;
    }
};


module.exports = { getCoachController };
