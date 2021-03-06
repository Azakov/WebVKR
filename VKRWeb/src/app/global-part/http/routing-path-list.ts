export const RequestPathList = {
  // //get
  // listStudents:
  //   "http://localhost:8080/profile/1f4a0cc8b33c43c3beddfe6181c1b8c5",

  //Authorization
  //post
  signIn: "http://localhost:8080/signIn",
  //post
  signUp: "http://localhost:8080/signUp",
  //post
  logOut: "http://localhost:8080/signOut",

  //profile
  //get
  openUser: "http://localhost:8080/profile/get",
  saveUser: "http://localhost:8080/profile/save",
  changePassword: "http://localhost:8080/changePassword",

  //Task
  //get
  courseTask:
    "http://localhost:8080/course/selecttasks?courseId=edbe8757-86b8-4e30-bc97-e72b2b5fce4b",
  //post
  addTask: "http://localhost:8080/course/addtask",
  //get
  getTask: "http://localhost:8080/task/get",
  //post
  editTask: "http://localhost:8080/task/save",
  //post
  deleteTask: "http://localhost:8080/course/deleteTask",
  //get
  downloadEntryTaskData: "http://localhost:8080/task/downloadAttachment",
  //post
  sendEntryTaskData: "http://localhost:8080/task/uploadInput",
  //post
  sendSolution: "http://localhost:8080/task/uploadSolution",
  //post
  downloadSolution: "http://localhost:8080/task/downloadAttachment",
  //post
  markTask: "http://localhost:8080/task/rateSolution",

  //Course
  //get
  courseList: "http://localhost:8080/course/select",
  //post
  courseCreate: "http://localhost:8080/course/save",
  //post
  courseEdit: "http://localhost:8080/course/save",
  //get
  openCourse:
    "http://localhost:8080/course/get?id=edbe8757-86b8-4e30-bc97-e72b2b5fce4b",
  //post
  deleteCourse: "http://localhost:8080/course/delete",
  //get
  courseLink: "http://localhost:8080/course/selectLinks",
  //post
  addCourse: "http://localhost:8080/group/grantAccess",
  //post
  delteCourse: "http://localhost:8080/group/revokeAccess",

  //Group
  //get
  groupList: "http://localhost:8080/group/list",
  //post
  createGroup: "http://localhost:8080/group/save",
  //post
  editGroup: "http://localhost:8080/group/save",
  //get
  openSmth:
    "http://localhost:8080/group/get?id=1a6ca73993814a9a84bc6d86fdd20865",
  //post
  deleteGroup: "http://localhost:8080/group/delete",
  //get
  studentList:
    "http://localhost:8080/group/getStudentList?groupId=e67c0ea36171425e8f86a19a902f678b",
  //get
  userList: "http://localhost:8080/group/getUserList",

  //Invite
  //post
  sendInviteEmail: "http://localhost:8080/group/inviteStudent",
  //post
  delteInviteEmail: "",
  //get
  inviteList: "http://localhost:8080/group/getInviteList",
};
