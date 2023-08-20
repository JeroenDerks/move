import { User } from "@/types/User";
import { Heading } from "../Heading";
import { UserTag } from "../UserTag";

export const UserTags = ({ user }: { user: User }) => (
  <>
    <Heading variant="h4">{user.name}</Heading>
    {user.tags.map((tag) => (
      <UserTag key={tag.id} {...{ tag, user }} />
    ))}
  </>
);
