export interface ContactModel {
  sharing: Sharing[];
  contactType: string;
  companyName: string;
  enrich: boolean;
  sfdcDuplicate: boolean;
  sfdcEnrich: boolean;
  clientId: string;
  source: string;
  addresses: Address[];
  emails: Email[];
  phoneNumbers: PhoneNumber[];
  prefix: string;
  firstName: string;
  lastName: string;
  title: string;
  middleName: string;
  suffix: string;
  salutation: string;
  gender: string;
  status: string;
  assignedTo: string;
  websites: Website[];
  tags: string[];
  profiles: Profile[];
  lists: List[];
  profileUrl: string;
  metaRefs: MetaRef[];
  customFields: CustomField[];
  organizationId: string;
  creatorId: string;
  displayName: string;
  relatedTo: RelatedTo[];
  id: string;
  birthday: string;
  nationality: string;
  locale: string;
  pictures: Picture[];
  updated: Date;
  created: Date;
  profilePicture: string;
  favorite: boolean;
}

interface Sharing {
  id: string;
  entity: string;
}

interface Address {
  fullAddress: string;
  street: string;
  neighborhood: string;
  poBox: string;
  postCode: string;
  city: string;
  region: string;
  country: string;
  type: string;
}

interface Email {
  primary: boolean;
  type: string;
  email: string;
  status: string;
}

interface PhoneNumber {
  primary: boolean;
  type: string;
  number: string;
  status: string;
}

interface Website {
  primary: boolean;
  type: string;
  url: string;
}

interface Profile {
  source: string;
  url: string;
  username: string;
  avatarUrl: string;
}

interface List {
  active: boolean;
  currentStatus: string;
  updated: number;
  name: string;
  listId: number;
}

interface MetaRef {
  systemId: string;
  systemURL: string;
  entityId: string;
  entityName: string;
}

interface Value {
}

interface References {
}

interface CustomField {
  value: Value;
  name: string;
  definitionId: number;
  type: string;
  references: References;
  readOnly: boolean;
}

interface Sharing2 {
  id: string;
  entity: string;
}

interface RelatedTo {
  id: string;
  type: string;
  displayName: string;
  companyName: string;
  companyId: string;
  title: string;
  creatorId: string;
  sharing: Sharing2[];
  profilePicture: string;
}

interface Picture {
  url: string;
  source: string;
  created: number;
  id: string;
  default: boolean;
}

