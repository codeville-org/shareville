import { createAccessControl } from "better-auth/plugins/access";
import {
  adminAc,
  defaultStatements,
  memberAc,
  ownerAc
} from "better-auth/plugins/organization/access";

/**
 * make sure to use `as const` so typescript can infer the type correctly
 */
const statement = {
  ...defaultStatements,
  class: ["create", "read", "update", "delete"]
} as const;

export const ac = createAccessControl(statement);

export const member = ac.newRole({
  class: ["read"],
  ...memberAc.statements
});

export const admin = ac.newRole({
  class: ["read", "create", "update"],
  ...adminAc.statements
});

export const owner = ac.newRole({
  class: ["create", "read", "update", "delete"],
  ...ownerAc.statements
});
