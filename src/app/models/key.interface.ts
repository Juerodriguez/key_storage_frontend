
export interface KeyI {
  name: string;
  password: string;
  shared_at: (SharedI | null)[];
  created_at: Date;
  modify_at: Date;
}

export interface SharedI{
  email: string;
  visited: string;
  info_ip: string;
  key_related: string;
}

export interface SharedPOSTI{
  email?: string | null;
}

export interface KeyPostI {
  name?: string | null;
  password?: string | null;
}