type Info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoList = Info & {
  role: string;
  lastlogin: Date;
};
export { type AdminInfoList, type Info };
