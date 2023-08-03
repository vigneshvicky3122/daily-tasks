//Find all the topics and tasks which are thought in the month of October
const startOfMonth = new Date("2023-10-01");
const endOfMonth = new Date("2023-10-31");

db.topics.find({
  start_date: { $gte: startOfMonth.getDate(), $lte: endOfMonth.getDate() },
});

db.tasks.find({
  submission_date: { $gte: startOfMonth.getDate(), $lte: endOfMonth.getDate() },
});

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
const startDate = new Date("2020-10-15");
const endDate = new Date("2020-10-31");

db.company_drives.find({
  drive_date: { $gte: startDate.getDate(), $lte: endDate.getDate() },
});

//Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
  {
    $lookup: {
      from: "attendance",
      localField: "drive_date",
      foreignField: "class_date",
      as: "attendance_info",
    },
  },
  {
    $lookup: {
      from: "users",
      localField: "attendance_info.user_id",
      foreignField: "_id",
      as: "students_info",
    },
  },
  {
    $project: {
      drive_name: 1,
      students: "$students_info.name",
    },
  },
]);

//Find the number of problems solved by the user in codekata
db.codeKata.aggregate([
  {
    $group: {
      _id: "$user_id",
      total_problems_solved: { $sum: "$problems_solved" },
    },
  },
]);

//Find all the mentors with who has the mentee's count more than 15
db.mentors.find({
  mentee_count: { $gt: 15 },
});

//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
const date1 = new Date("2020-10-15");
const date2 = new Date("2020-10-31");

db.attendance.find({
  attendance_date: { $gte: date1.getDate(), $lte: date2.getDate() },
  attendance_value: "absent",
});

db.tasks.find({
  submission_date: { $gte: date1.getDate(), $lte: date2.getDate() },
  submission_value: "no",
});
