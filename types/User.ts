import { Tag } from "./Tag";

export type User = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  tags: Tag[];
};
