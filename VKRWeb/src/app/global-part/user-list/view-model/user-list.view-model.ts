export class UserListViewModel {
  public groupList: any;

  public fillModel(
    data = [
      {
        name: "КН-402",
        studentList: [
          { studentName: "Константин Константинович Константинопольский" },
          { studentName: "sobaka-deputata@gmail.com" },
        ],
      },
    ]
  ) {
    this.groupList = data;
  }
}
