export class MeetingRecord {
  constructor(
    public title: string,
    public time: Date,
    public contents: string[],  // 会议内容总结条目
    public recorder: string,
    public isCopy = false       // 该记录是否为副本
  ) {}
}
