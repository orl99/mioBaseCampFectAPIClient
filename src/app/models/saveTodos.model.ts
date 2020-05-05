export interface SaveTodos {
  status: string;
  createdAt: string;
  title: string;
  url: string;
  parent: {
    title: string
  };
  bucket: {
    name: string
  };
  dueOn: string;
  // assignees: any;

}

export class SaveTodos {
  status: string;
  createdAt: string;
  title: string;
  url: string;
  parent: {
    title: string
  };
  bucket: {
    name: string
  };
  dueOn: string;
  constructor(
    status: string,
    createdAt: string,
    title: string,
    url: string,
    parentTitle: string,
    bucName: string,
    dueOn: string,
  ){
    this.status = status;
    this.createdAt = createdAt;
    this.title = title;
    this.url = url;
    this.parent.title = parentTitle;
    this.bucket.name = bucName;
    this.dueOn = dueOn;
  }
}
