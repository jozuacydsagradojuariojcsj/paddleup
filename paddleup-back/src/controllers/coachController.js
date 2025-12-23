const coachMockData = [
  {
    coachId: "C123",
    name: "Jed Juario",
    stars: 4.9,
    achievement1: "2 years of competetive pickleball experience",
    achievement2: "3x Champion (Centrio, Ayala Picklemall CDO, Kibawe)",
    rate: "350/HR/Person",
    rate2: "250/HR/Person if 4PAX Above",
    email: "juariojedcyrus@gmail.com",
    facebook: "Jed Cyrus Sagrado Juario",
    contact: "09269673682",
    booking: [],
  },
  {
    coachId: "C124",
    name: "Joshua Manlangit",
    stars: 4.9,
    achievement1: "2 years of competetive pickleball experience",
    achievement2: "3x Champion (Centrio, Ayala Picklemall CDO, Kibawe)",
    rate: "350/HR/Person",
    rate2: "250/HR/Person if 4PAX Above",
    email: "juariojedcyrus@gmail.com",
    facebook: "Joshua Manlangit",
    contact: "09269673682",
    booking: [],
  },
];

const newBookings = [];

const getCoachController = async (req, res) => {
  try {
    const coach = coachMockData;
    res.status(200).json(coach);
    return;
  } catch (e) {
    res.status(500).json({ error: `Failed to retrieve posts: ${e}` });
    return;
  }
};

const bookCoachController = async (req, res) => {
  try {
    const { coachId, userId, user, date, time, pax } = req.body;

    if (!coachId || !userId || !user || !date || !time || !pax) {
      res
        .status(400)
        .json({
          error: "Required Fields are: coachId, userId, user, date, time, pax",
        });
      return;
    }

    const coach = coachMockData.find((c) => c.coachId === coachId);
    if (!coach) {
      res.status(404).json({ error: "No Coach Found" });
      return;
    }

    const newBooking = { coachId, userId, user, date, time, pax };
    coach.booking.push(newBooking);

    res.status(200).json({ message: "Booking made successfully" });
    return;
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getCoachController, bookCoachController };
