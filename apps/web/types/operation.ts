import { Confirmation, RootResponse } from "types";

type OperationType = "deposit" | "withdrawal";

export type Operation = {
  id: number;
  attributes: {
    amount: number;
    type: OperationType;
    createdAt: string; // ISO string
    date: string; // ISO string
    updatedAt: string; // ISO string
  } & Confirmation;
};

export type OperationsResponse = RootResponse<Operation>;