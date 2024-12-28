

export enum CreateTypes {
    note = "note",
    bout = "bout",
    goal = "goal",
  }

export const createMenuOptions = [
    {
      name: "Season Goal",
      createType: CreateTypes.goal,
    },
    { name: "Journal Entry" },
    { name: "Note", createType: CreateTypes.note },
    { name: "Bout Reminder", createType: CreateTypes.bout },
  ];