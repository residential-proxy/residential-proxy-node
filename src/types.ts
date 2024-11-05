export type Maybe<T> = T | null;

export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  numeric: { input: number; output: number };
  timestamp: { input: string; output: string };
  timestamptz: { input: string; output: string };
  user_role: { input: any; output: any };
};

export type Provinces = {
  __typename?: "provinces";
  id: Scalars["Int"]["output"];
  level: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  name_no_diacritics?: Maybe<Scalars["String"]["output"]>;
};

export type ProxyIPDTO = {
  proxy: string;
  ip: string;
  port: number;
  expired_at: string;
  province_id: number;
  status: string;
  type: string;
};

export type Proxy_Keys = {
  __typename?: "proxy_keys";
  agency_id?: Maybe<Scalars["Int"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  expired_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id: Scalars["Int"]["output"];
  is_active?: Maybe<Scalars["Boolean"]["output"]>;
  key_type?: Maybe<Scalars["String"]["output"]>;
  proxy_key: Scalars["String"]["output"];
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["Int"]["output"]>;
};

export type ProxyKeysDTO = Pick<
  Proxy_Keys,
  "proxy_key" | "expired_at" | "key_type"
>;

export type Users = {
  __typename?: "users";
  agency_id: Scalars["Int"]["output"];
  api_key?: Maybe<Scalars["String"]["output"]>;
  avatar?: Maybe<Scalars["String"]["output"]>;
  balance?: Maybe<Scalars["numeric"]["output"]>;
  code?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  is_active?: Maybe<Scalars["Boolean"]["output"]>;
  oauth_id?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  payment_code?: Maybe<Scalars["String"]["output"]>;
  phone_number?: Maybe<Scalars["String"]["output"]>;
  role: Scalars["user_role"]["output"];
  show_name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_name?: Maybe<Scalars["String"]["output"]>;
};
