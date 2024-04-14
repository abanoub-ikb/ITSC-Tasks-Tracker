
export const FORM_INPUTS = [
    { id: "name", label: "task name", type: "text", isRequired: true },
    {
      id: "totalH",
      label: "task total hours",
      type: "number",
      isRequired: true,
    },
    { id: "start", label: "task start time", type: "date", isRequired: true },
    { id: "end", label: "task deadline", type: "date", isRequired: true },
  ];

export const TABEL_HEAD = [
  {id:'index',name:'#'},
  {id:'task-name',name:'Task Name'},
  {id:'task-start',name:'Start Date'},
  {id:'deadline',name:'Deadline'},
  {id:'task-t-h',name:'Task Workload/H'},
  {id:'worked-h',name:'Hours Of Work'},
  {id:'comp-date',name:'Completion Date'},
  {id:'progress',name:'Progress'},
  {id:'status',name:'Status'},
  {id:'actions',name:'Actions'},
];