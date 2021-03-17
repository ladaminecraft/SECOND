import { Context, MigrationVersion } from "./typing.v1";

export const version: MigrationVersion = "v1";

export const up = async (context: Context) => {
  {
    const data: any = {
      table: { name: "notes" },
      data: [
        {
          createdAt: "2021-03-10T21:34:42.402Z",
          deletedAt: 0,
          email: "ladusikinbox@gmail.com",
          firstName: "Lada",
          id: "ckm3yn84i000q07jue9ae3yn0",
          is8base: false,
          isOwner: false,
          lastName: "Miller",
          origin: "administration",
          status: "active",
          timezone: "",
          updatedAt: "2021-03-10T21:34:42.402Z",
        },
        {
          createdAt: "2021-03-14T00:24:08.979Z",
          deletedAt: 0,
          email: "foma.bagiyan@8base.com",
          firstName: "Foma",
          id: "ckm8f0opf00cg07jpgzx10ejy",
          is8base: false,
          isOwner: false,
          lastName: "Bagiyan",
          origin: "invitation",
          status: "active",
          timezone: null,
          updatedAt: "2021-03-16T06:57:26.271Z",
        },
      ],
    };
    await context.data.createMany(data);
  }
};
