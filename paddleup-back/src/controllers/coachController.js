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
  {
    coachId: "C125",
    name: "Ian Malacaman",
    stars: 4.9,
    achievement1: "2 years of competetive pickleball experience",
    achievement2: "3x Champion (Centrio, Ayala Picklemall CDO, Kibawe)",
    rate: "350/HR/Person",
    rate2: "250/HR/Person if 4PAX Above",
    email: "ianmalacaman@gmail.com",
    facebook: "Ian Malacaman",
    contact: "09269673682",
    booking: [],
  },
];

const getCoachController = async (req, res) => {
  try {
    console.log("Here2x");
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
    const { coachId, userId, username, date, time } = req.body;

    if (!coachId || !userId || !username || !date || !time) {
      console.log("Error Here");
      res.status(400).json({
        error: "Required Fields are: coachId, userId, user, date, time",
      });
      return;
    }

    const coach = coachMockData.find((c) => c.coachId === coachId);
    if (!coach) {
      res.status(404).json({ error: "No Coach Found" });
      return;
    }

    const newBooking = { coachId, userId, username, date, time };
    coach.booking.push(newBooking);

    res.status(200).json({ message: "Booking made successfully" });
    return;
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSpecificBookByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params; // get userId from route

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    // Collect all bookings from all coaches for this user
    const userBookings = coachMockData
      .map((coach) => {
        // Filter the bookings of this coach for the user
        const bookings = coach.booking.filter((b) => b.userId === userId);
        return bookings.length > 0
          ? { coachId: coach.coachId, coachName: coach.name, bookings }
          : null;
      })
      .filter(Boolean); // remove nulls

    if (userBookings.length === 0) {
      res.status(404).json({ error: "No bookings found for this user" });
      return;
    }

    res.status(200).json(userBookings);
    return;
  } catch (e) {
    res.status(500).json({ error: `Internal Server Error: ${e}` });
    return;
  }
};

const getOneCoachController = async (req, res) => {
  try {
    const { coachId } = req.params; // get coachId from route params

    if (!coachId) {
      res.status(400).json({ error: "coachId is required" });
      return;
    }

    // Find the coach
    const coach = coachMockData.find((c) => c.coachId === coachId);

    if (!coach) {
      res.status(404).json({ error: "Coach not found" });
      return;
    }

    res.status(200).json(coach);
  } catch (e) {
    res.status(500).json({ error: `Internal Server Error: ${e}` });
  }
};

module.exports = {
  getCoachController,
  bookCoachController,
  getOneCoachController,
  getSpecificBookByUserIdController,
};
